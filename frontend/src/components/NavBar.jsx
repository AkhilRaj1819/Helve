import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 fixed top-0 left-0 z-50 flex items-center justify-between bg-transparent backdrop-blur-[2px]">
        {/* Left: Burger Menu */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#fffbeb] transition-transform duration-300 z-50 hover:scale-110"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Center: Brand Logo with Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="relative flex items-center mt-[8vh]">
            <div className="h-[2px] bg-[#fffbeb] lg:w-[46vw] w-[28vw]"></div>
            <p
              className="select-none mx-2 text-4xl font-['MonsieurLaDoulaise'] font-bold text-[#fffbeb]"
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)" }}
            >
              H
            </p>
            <div className="h-[2px] bg-[#fffbeb] lg:w-[46vw] w-[28vw]"></div>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <lord-icon
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="hover"
            colors="primary:#fffbeb,secondary:#fffbeb"
            className="cursor-pointer"
          ></lord-icon>

          <lord-icon
            src="https://cdn.lordicon.com/uisoczqi.json"
            trigger="hover"
            colors="primary:#fffbeb,secondary:#fffbeb"
            className="cursor-pointer"
          ></lord-icon>

          <lord-icon
            src="https://cdn.lordicon.com/kdduutaw.json"
            trigger="hover"
            colors="primary:#fffbeb,secondary:#fffbeb"
            className="cursor-pointer"
          ></lord-icon>
        </div>
      </nav>

      {/* Overlay (click to close) */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-700 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] xl:w-[20vw] bg-[#fffbeb] shadow-[8px_0_25px_rgba(0,0,0,0.2)] z-50 transform transition-transform duration-700 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 mt-10">
          <p className="text-3xl font-semibold mb-10 tracking-wide text-gray-800">
            Menu
          </p>
          <ul className="space-y-6 text-lg font-light text-gray-800 tracking-wider">
            <li className="hover:text-gray-500 cursor-pointer hover:border-b">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">Men</li>
            <li className="hover:text-gray-500 cursor-pointer">Women</li>
            <li className="hover:text-gray-500 cursor-pointer">Collections</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
