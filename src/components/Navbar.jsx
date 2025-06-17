import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", text: "HOME", label: "Home" },
    {
      to: "/services",
      text: "SERVICES",
      label: "Services",
    },
    {
      to: "/who-we-are",
      text: "WHO WE ARE",
      label: "Who-we-are",
    },
    {
      to: "/contact",
      text: "CONTACT",
      label: "Contact",
    },
  ];

  return (
    <header className="relative bg-gray-50 container mx-auto my-5 p lg:rounded-lg">
      <nav className="w-full" role="navigation" aria-label="Main navigation">
        <div className="container px-0 lg:px-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-50 font-bold"
              aria-label="Go to homepage"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="object-contain w-auto h-18 lg:h-32"
               
                loading="eager"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="items-center hidden space-x-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.to}
                  className="tracking-widest text-black font-semibold hover:text-[#0C4A79] transition-colors"
                  aria-label={link.label}
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                className="relative z-50 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 flex items-center justify-center pt-20 bg-white lg:hidden"
              style={{ top: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col items-center p-4 space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className="text-black tracking-wider text-xl font-semibold hover:text-[#0C4A79] transition-colors"
                    aria-label={link.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
