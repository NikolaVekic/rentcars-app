import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full relative">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="logo text-xl font-semibold">
          RENTCARS
        </Link>

        {/* Desktop Nav Links (hidden on mobile) */}
        <nav className="hidden md:flex md:gap-12 items-center">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">
            Contact
          </Link>
          <Link to="/browse" className="nav-btn">
            Rent a Car
          </Link>
        </nav>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Backdrop (dimmed overlay) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-between">
          <h3 className="text-[1.5rem] font-medium">Menu</h3>
          <button onClick={closeMenu} aria-label="Close menu">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col text-right">
          <Link
            to="/"
            className="text-[1.5rem] py-3 px-4 border-b border-gray-200"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[1.5rem] py-3 px-4 border-b border-gray-200"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[1.5rem] py-3 px-4 border-b border-gray-200"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/browse"
            className="text-[1.5rem] py-3 px-4"
            onClick={closeMenu}
          >
            Rent a Car
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
