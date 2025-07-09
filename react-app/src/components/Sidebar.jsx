// src/components/Sidebar.js
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar with Hamburger */}
      <div className="md:hidden p-4 bg-white shadow fixed top-0 left-0 w-full z-40">
        <button onClick={() => setIsOpen(true)}>
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar: Static on md+, Slide-in on mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-md transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block`}
      >
        {/* Close icon for mobile */}
        <div className="md:hidden p-4 flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-indigo-600">Nirbhaya</h2>
          <nav className="flex flex-col gap-3 text-gray-700">
            <a href="#" className="hover:text-indigo-600">Dashboard</a>
            <a href="#" className="hover:text-indigo-600">Safety Alerts</a>
            <a href="#" className="hover:text-indigo-600">Emergency Contacts</a>
            <a href="#" className="hover:text-indigo-600">Preferences</a>
            <a href="#" className="hover:text-indigo-600">Settings</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
