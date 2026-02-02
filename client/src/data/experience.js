// src/data/experience.js
import microcertCert from "../images/microcert-cloud-intern.jpg";
import ediglobe from "../images/ediglobe-web-intern.jpg";

export const experience = [
  {
    role: "Cloud Intern",
    company: "Microcert",
    location: "Remote",
    period: "June 2022 – July 2022",
    description:
      "Gained foundational knowledge of Microsoft Azure (AZ-900), including core cloud concepts, services, and cloud economics.",
    skills: ["Microsoft Azure", "Cloud Computing", "AZ-900"],
    certificate: microcertCert
  },
  {
    role: "Web Development Intern",
    company: "EdiGlobe",
    location: "Remote",
    period: "Sept 2025 – Oct 2025",
    description:
      "Trained in full-stack web development using HTML, CSS, JavaScript, React.js, Node.js, and databases such as MySQL and MongoDB.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MySQL",
      "MongoDB"
    ],
    certificate: ediglobe
  }
];
