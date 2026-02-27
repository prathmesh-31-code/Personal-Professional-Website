import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Contact = () => {
  return (
    <main className="mt-16 px-24 max-sm:px-5">
      {/* Main container */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left content */}
        <div>
          <h1 className="text-4xl font-serif text-gray-900">
            Let’s Connect
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
            Have a question, suggestion, or want to discuss a project,
            research, or collaboration?  
            Feel free to reach out — I’d be happy to connect.
          </p>

          <div className="mt-10 space-y-4 text-gray-700">
            <p>
              📍 <span className="font-medium">Pune, India</span>
            </p>
            <p>
              📧 <span className="font-medium">prathmeshb.code@gmail.com</span>
            </p>
            <p className="text-sm text-gray-500">
              I usually respond within 24–48 hours.<br></br><br></br>
              
            </p>
            <p className="text-sm text-black-500 font-serif">
              Socials:
            </p>
          </div>

          {/*Socials*/}
          <div className="flex items-center gap-4 text-zinc-500">
          <a
            href="https://instagram.com/prathmesh_39"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/prathmesh-balsurkar-2397092a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <LinkedInIcon  />
          </a>
          <a
            href="https://github.com/prathmesh-31-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <GitHubIcon  />
          </a>
        </div>
        </div>

        {/* Right form */}
        <div className="rounded-2xl p-8 
                bg-white/40 backdrop-blur-xl
                border border-white/50
                shadow-2xl">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Send a Message
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-slate-200 h-11 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-slate-200 h-11 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border border-slate-200 h-11 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400"
            />

            <textarea
              rows="5"
              placeholder="Your message..."
              className="border border-slate-200 px-3 py-2 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-slate-400"
            />

            <button
              type="submit"
              className="mt-2 h-11 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      
</main>
  );
};

export default Contact;
