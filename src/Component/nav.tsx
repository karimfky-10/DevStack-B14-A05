
import { useState } from "react";
import logo from "../assets/logo-text.png";
import menu from "../assets/hamburger.png";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-50">

      {/* Navbar */}
      <div className="relative flex items-center justify-between py-2 px-4 lg:py-7">

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img className="w-6" src={menu} alt="Menu" />
        </button>

        {/* Logo */}
        <img
          className="absolute left-1/2 -translate-x-1/2 w-32 md:static md:translate-x-0 md:w-auto"
          src={logo}
          alt="Logo"
        />

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex md:gap-7 md:font-bold lg:gap-10 lg:text-xl">
          <li>
            <a href="#" className="text-[#DB2777]">
              Home
            </a>
          </li>

          <li>
            <a href="#">Technologies</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Sign In / Sign Up */}
        <div className="flex gap-2 text-sm md:gap-4 md:text-base lg:gap-6 lg:text-xl">
          <button className="font-bold rounded-2xl md:w-24 lg:w-28 lg:h-10 text-olive-700">
            Sign in
          </button>

          <button className="py-1 px-4 rounded-2xl bg-[#DB2777] md:w-24 lg:w-28 md:h-8 lg:h-10 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col items-center gap-5 py-5 font-semibold">

            <li>
              <a href="#" className="text-[#DB2777]">
                Home
              </a>
            </li>

            <li>
              <a href="#">Technologies</a>
            </li>

            <li>
              <a href="#">Projects</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

          </ul>
        </div>
      )} */}
      {isMenuOpen && (
  <div className="md:hidden border-t border-gray-200 bg-white">
    <ul className="flex flex-col items-start gap-5 py-5 px-6 font-semibold">
      <li>
        <a href="#" className="text-[#DB2777]">
          Home
        </a>
      </li>

      <li>
        <a href="#">Technologies</a>
      </li>

      <li>
        <a href="#">Projects</a>
      </li>

      <li>
        <a href="#">About</a>
      </li>

      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
)}

      {/* Bottom Border */}
      <div className="border-b border-gray-300"></div>
    </div>
  );
}
