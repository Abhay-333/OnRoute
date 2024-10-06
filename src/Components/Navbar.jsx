import React, { useState } from "react";
import logo from "../Resources/logo.jpg";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav" className="fixed mx-auto bg-transparent w-full text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 gap-2">
                <img src={logo} alt="Logo" className="rounded-xl w-[6%] mr-2" />
                <span className="tracking-normal text-3xl font-bold">
                  OnRoute
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 space-x-1">         
            <Link to="/home" element={<Home />}>
              <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
                Home
              </h1>
            </Link>

            <Link to='/about' element={<About/>}>
              <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
                About
              </h1>
            </Link>

            <Link to='/contact' element={<Contact/>}>
              <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
                Contact
              </h1>
            </Link>

            <Link to="/" element={<Home />}>
              <button className="py-3 bg-[#2669D4] px-6 rounded-full font-semibold transition duration-300">
                Login
              </button>
            </Link>

            {/* <a
              href="#"
              className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300"
            >
              Contact
            </a> */}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
      
        <Link to="/home" element={<Home />}>
          <h1 className="block py-2 px-4 text-sm hover:bg-gray-200">Home</h1>
        </Link>

        <Link>
          <h1 className="block py-2 px-4 text-sm hover:bg-gray-200">About</h1>
        </Link>

        <Link>
          <h1 className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</h1>
        </Link>

        <Link to="/login" element={<Home />}>
          <button className="block bg-[#2669D4] py-2 px-4 text-sm hover:bg-gray-200">Login</button>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
