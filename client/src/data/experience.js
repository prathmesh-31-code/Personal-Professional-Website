// src/data/experience.js
import microcertCert from "../images/Certificates/microcert-cloud-intern.jpg";
import ediglobe from "../images/Certificates/ediglobe-web-intern.jpg";
import MicrocertIcon from "../images/logos/microcert_logo.png";
import EdiGlobeIcon from "../images/logos/ediglobe_logo.png";
import BizSecureLabsIcon from "../images/logos/biz_logo.png";

export const experience = [
  {
    role: "Cloud Intern",
    company: "Microcert",
    location: "Remote",
    period: "June 2022 - July 2022",
    description:
      "Gained foundational knowledge of Microsoft Azure (AZ-900), including core cloud concepts, services, and cloud economics.",
    skills: ["Microsoft Azure", "Cloud Computing", "AZ-900"],
    certificate: microcertCert,
    logo: MicrocertIcon,
    companylink: "https://www.microcert.in/"
  },
  {
    role: "Web Development Intern",
    company: "EdiGlobe",
    location: "Remote",
    period: "Sept 2025 - Oct 2025",
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
    certificate: ediglobe,
    logo: EdiGlobeIcon,
    companylink: "https://www.ediglobe.com/"
  },
  {
  role: "Software Intern",
  company: "Biz Secure Labs Pvt. Ltd.",
  location: "I-Space IT Park, Bavdhan, Pune - 411021",
  period: "Feb 2026 - Aug 2026",
  description:
    "Working on a dedicated sub-module of the company's CSPM/DSPM cloud security platform under the guidance of senior engineers. Responsible for developing clean, efficient, and well-documented code, integrating with cloud provider APIs (AWS, Azure, GCP) to fetch metadata and analyze configurations. Actively participating in sprint meetings, technical discussions, and code reviews while collaborating with the team to test, debug, and optimize module performance. Conducting research on emerging cloud security trends to propose enhancements to the platform.",
  skills: [
    "Cloud Security",
    "CSPM",
    "DSPM",
    "AWS",
    "API Integration",
    "Software Development",
    
  ],
  certificate: null,
  logo: BizSecureLabsIcon,
  companylink: "https://npav.net/"
}


];
