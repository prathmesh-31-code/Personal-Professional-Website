import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const activeIndex = navItems.findIndex(
    (item) => item.path === location.pathname
  );

  const currentIndex =
    hovered !== null ? hovered : activeIndex;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center rounded-full
        bg-white/20 backdrop-blur-xl
        border border-white/30
        shadow-lg overflow-hidden">

        {/* Sliding Glass Background */}
        <div
          className="absolute h-full w-32 rounded-full
          bg-white/90 backdrop-blur-md
          transition-all duration-300 ease-out"
          style={{
            transform: `translateX(${currentIndex * 128}px)`
          }}
        />

        {navItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.path}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`relative z-10 w-32 text-center px-6 py-3 text-sm font-medium
              transition-colors duration-300
              ${
                location.pathname === item.path
                  ? "text-black"
                  : "text-gray-700 hover:text-black"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
