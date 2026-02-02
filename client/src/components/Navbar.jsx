import React, { useEffect, useRef, useState } from "react";
import logo from "../images/PB-logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200">
      <nav
        ref={navRef}
        className="max-w-7xl mx-auto px-24 max-sm:px-5 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="PB Logo" className="w-10" />
          <span className="font-serif text-lg font-semibold text-gray-900">
            
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-700">
          {[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`relative hover:text-black transition ${
                  location.pathname === item.path
                    ? "text-black font-medium"
                    : ""
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black rounded"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                !isOpen
                  ? "M4 6h16M4 12h16M4 18h16"
                  : "M6 18L18 6M6 6l12 12"
              }
            />
          </svg>
        </button>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="absolute top-full right-5 mt-3 w-40 bg-white rounded-xl shadow-lg border border-zinc-200 md:hidden">
            <ul className="flex flex-col text-sm">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 hover:bg-zinc-100"
              >
                Home
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 hover:bg-zinc-100"
              >
                Contact
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
