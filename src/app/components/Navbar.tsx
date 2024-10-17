"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 lg:p-8 z-50 ">
      <div>
        <a href="#">
          <img src="/logo.png" alt="Logo" className="h-8 ml-4 lg:ml-12 hover:animate-spin" />
        </a>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>
      <ul
        className={`absolute lg:relative bg-[#104d4957] p-3 rounded-lg lg:flex lg:space-x-12 text-white transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-12 left-0 w-full flex-col lg:flex-row"
            : "hidden lg:flex"
        }`}
      >
        <li className="py-2 lg:py-0">
          <Link
            href="#"
            className="hover:text-[#31ABB0] transition duration-200 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
        </li>
        <li className="py-2 lg:py-0">
          <Link
            href="#skills"
            className="hover:text-[#31ABB0] transition duration-200 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
        </li>
        <li className="py-2 lg:py-0">
          <Link
            href="#projects"
            className="hover:text-[#31ABB0] transition duration-200 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li className="py-2 lg:py-0">
          <Link
            href="#contact"
            className="hover:text-[#31ABB0] transition duration-200 tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
