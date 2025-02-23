"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 bg-white shadow-md">
        <div className="flex items-center">
          <Image src="/images/LilyDaycare.svg" width={120} height={120} alt="Logo" />
        </div>

        <nav className="hidden lg:flex space-x-10 font-medium">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#achievement" className="hover:text-blue-600">
            Achievements
          </a>
          <a href="#aboutus" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#featured-programs" className="hover:text-blue-600">
            Featured Programs
          </a>
          <a href="#daily-schedule" className="hover:text-blue-600">
            Daily Schedule
          </a>
          <a href="#contact-us" className="hover:text-blue-600">
            Contact Us
          </a>
        </nav>

        <button
          onClick={toggleDrawer}
          className="text-2xl text-gray-800 lg:hidden focus:outline-none"
        >
          <FaBars />
        </button>

        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleDrawer}
        ></div>

        <div
          className={`fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-blue-500 to-blue-300 shadow-lg z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className="text-white text-lg font-semibold">Menu</h2>
            <button
              onClick={toggleDrawer}
              className="text-3xl text-white"
              aria-label="Close Menu"
            >
              <IoCloseSharp />
            </button>
          </div>
          <nav className="mt-4 space-y-4 px-4">
            <a
              href="#home"
              className="block text-white text-lg hover:text-yellow-300 transition duration-200"
            >
              Home
            </a>
            <a
              href="#achievement"
              className="block text-white text-lg hover:text-yellow-300 transition duration-200"
            >
              Achievements
            </a>
            <a
              href="#aboutus"
              className="block text-white text-lg hover:text-yellow-300 transition duration-200"
            >
              About Us
            </a>
            <a
              href="#featured-programs"
              className="block text-white text-lg hover:text-yellow-300 transition duration-200"
            >
              Featured Programs
            </a>
            <a
              href="#daily-schedule"
              className="block text-white text-lg hover:text-yellow-300 transition duration-200"
            >
              Daily Schedule
            </a>
            <a
              href="#contact-us"
              className="block text-white text-lg hover:text-yellow-300 transition duration-200"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
