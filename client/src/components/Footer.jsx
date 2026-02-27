import React from "react";
import logo from "../images/logos/PB-logo.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: logo  */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="PB Logo" className="w-8 h-auto" />
        </div>

        {/*Middle: Copyright */}
        <div className = "flex items-center">
          <span className="text-sm text-zinc-600 items-center">
            © {new Date().getFullYear()} Prathmesh Balsurkar
          </span>
        </div>
        
        {/* Right: socials */}
        <div className="flex items-center gap-4 text-zinc-500">
          <a
            href="https://instagram.com/prathmesh_39"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <InstagramIcon fontSize="small" />
          </a>
          <a
            href="https://www.linkedin.com/in/prathmesh-balsurkar-2397092a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <LinkedInIcon fontSize="small" />
          </a>
          <a
            href="https://github.com/prathmesh-31-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <GitHubIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
