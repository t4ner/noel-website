import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-white container lg:rounded-lg shadow-sm mt-10 lg:mt-20 lg:mb-5 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link to="/" aria-label="Cable Machinery GmbH Home">
              <img
                src="/logo/logo.png"
                alt="Cable Machinery GmbH Logo"
                className="h-14 lg:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Main Navigation links - Hidden on mobile */}
          <nav
            aria-label="Main Footer navigation"
            className="hidden lg:block "
          >
            <ul className="flex flex-wrap text-sm tracking-wider justify-end gap-x-8 gap-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 "
                >
                 HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 "
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/who-we-are"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200 "
                >
                  WHO WE ARE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-[#0C4A79] transition-colors duration-200"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons - Removed */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <p className="text-gray-400  text-center">
            © {new Date().getFullYear()} NOEL Consulting DWC-LLC | All Rights
            Reserved | Design and Development by TTYazilim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
