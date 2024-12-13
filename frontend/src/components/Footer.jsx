import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social Media Icons

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-6 h-auto">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brand Name */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-3">TaskMaster</h1>
            <p className="text-xs">
              Efficient task management for teams and individuals.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-xs">
            &copy; 2024 TaskMaster. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
