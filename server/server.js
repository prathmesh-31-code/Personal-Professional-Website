

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Allow frontend domain in production
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    crendentials: true ,
  })
);

app.use(express.json());

// ✅ Use dynamic port (IMPORTANT for deployment)
const PORT = process.env.PORT || 5000;

// ✅ Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Optional: Verify connection on startup
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email server error:", error);
  } else {
    console.log("Email server ready");
  }
});

// ----------------------------
// Home Route
// ----------------------------
app.get("/",(req, res) => {
  res.send("API is running");
});

// -----------------------------
// Contact Route
// -----------------------------

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL}>`,
      replyTo: email, // safer than using from: user email
      to: process.env.EMAIL,
      subject: "New Contact Message",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email failed to send" });
  }
});

// -----------------------------
// Subscribe Route
// -----------------------------
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email required" });
  }

  try {
    await transporter.sendMail({
      from: `"Website Subscription" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: "New Subscriber",
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Subscription failed" });
  }
});

// -----------------------------
// Start Server
// -----------------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
