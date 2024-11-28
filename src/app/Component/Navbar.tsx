import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="shadow w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <Link href="/" className="flex flex-row items-center">
          <div className="bg-orange-400 w-1 h-8"></div>
          <div className="ml-2">
            <p className="font-semibold text-white tracking-widest">
              PRIMAL DIGITAL
            </p>
            <p className="text-orange-400 text-xs font-semibold">MARKETING</p>
          </div>
        </Link>

        {/* Menu Button for Small Screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation - Hidden for Small Screens */}
        <nav className="hidden sm:flex space-x-6">
          <a
            href="#what-we-do"
            className="text-white hover:text-orange-400 transition"
          >
            ABOUT
          </a>
          <a
            href="#service"
            className="text-white hover:text-orange-400 transition"
          >
            SERVICE
          </a>
          <a
            href="#contact"
            className="text-white hover:text-orange-400 transition"
          >
            CONTACT
          </a>
        </nav>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="sm:hidden bg-transparent w-full">
          <ul className="flex flex-col items-start p-4 space-y-2 bg-black bg-opacity-50 rounded-md">
            <li>
              <a
                href="#what-we-do"
                className="block text-white hover:text-orange-400"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block text-white hover:text-orange-400"
              >
                SERVICE
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-white hover:text-orange-400"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
