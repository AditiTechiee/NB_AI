import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 shadow-inner border-t border-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <img
                src="/Nirbyanavbarlogo.png"
                alt="Nirbhaya Logo"
                className="w-12 h-12 mr-2"
              />
              <span className="font-semibold text-lg text-gray-800">Nirbhaya</span>
            </div>
            <p className="text-sm text-gray-600">
              Empowering safety through technology. Your voice, your shield.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">Home</a></li>
              <li><a href="#" className="hover:text-orange-500">Features</a></li>
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3">Safety Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500">Self Defense Tips</a></li>
              <li><a href="#" className="hover:text-orange-500">Helpline Numbers</a></li>
              <li><a href="#" className="hover:text-orange-500">Community Support</a></li>
            </ul>
          </div>

          {/* Social and Contact */}
          <div>
            <h4 className="font-semibold mb-3">Connect with Us</h4>
            <div className="flex space-x-4 text-xl text-gray-600">
              <a href="#"><FiFacebook className="hover:text-orange-500" /></a>
              <a href="#"><FiTwitter className="hover:text-orange-500" /></a>
              <a href="#"><FiInstagram className="hover:text-orange-500" /></a>
              <a href="#"><FiMail className="hover:text-orange-500" /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
          © {new Date().getFullYear()} Nirbhaya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;