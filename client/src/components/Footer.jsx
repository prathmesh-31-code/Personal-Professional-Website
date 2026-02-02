import React from "react";
import logo from "../images/PB-logo.png";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-blue">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: logo + name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="PB Logo" className="w-8 h-auto" />
          <span className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Prathmesh Balsurkar
          </span>
        </div>

        {/* Right: socials */}
        <div className="flex items-center gap-4 text-zinc-500">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <TwitterIcon fontSize="small" />
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <InstagramIcon fontSize="small" />
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <LinkedInIcon fontSize="small" />
          </a>
          <a
            href="https://github.com/yourhandle"
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
