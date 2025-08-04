import React, { useState } from 'react';
import { FiMenu, FiSearch, FiBell, FiSettings } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 z-50">
      <div className="w-full flex items-center justify-between px-0 py-3">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center space-x-8 pl-4">
          <div className="flex items-center space-x-2">
            <img
  src="/Nirbyanavbarlogo.png"
  alt="Nirbhaya AI Logo"
  className="w-12 h-12 mr-2"
/>

            <span className="font-semibold text-lg text-gray-800">Nirbhaya</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#" className="hover:text-black">Features</a>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
        </div>

        {/* Right: Search + Bell + Settings + Avatar */}
        <div className="hidden md:flex items-center space-x-4 pr-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search safety resources..."
              className="border rounded-md text-sm pl-8 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400"
            />
            <FiSearch className="absolute left-2 top-2 text-gray-400 text-sm" />
          </div>
          <FiBell className="text-xl text-gray-600 cursor-pointer" />
          <FiSettings className="text-xl text-gray-600 cursor-pointer" />
          <img
            src="https://i.pravatar.cc/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden pr-4" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-600">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#" className="hover:text-black">Features</a>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Contact</a>
            <div className="flex items-center space-x-3 mt-3">
              <FiSearch className="text-xl" />
              <FiBell className="text-xl" />
              <FiSettings className="text-xl" />
              <img
                src="https://i.pravatar.cc/32"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;