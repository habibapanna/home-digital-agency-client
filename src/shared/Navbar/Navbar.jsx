import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../../components/Banner/Banner";
import Banner1 from "../../components/Banner1/Banner1";
import Banner2 from "../../components/Banner2/Banner2";
import Banner3 from "../../components/Banner3/Banner3";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const backgrounds = {
    "/": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/home-hero-bg.jpg",
    "/services": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/about-bg-img.jpg",
    "/about": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/about-bg-img.jpg",
    "/contact": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/about-bg-img.jpg"
  };

  const banners = {
    "/": <Banner />,
    "/services": <Banner1 />,
    "/about": <Banner2 />,
    "/contact": <Banner3 />,
  };

  const currentBanner = banners[location.pathname] || <Banner />;
  const currentBg = backgrounds[location.pathname] || backgrounds["/"];

  const linkClasses = ({ isActive }) =>
    isActive ? "text-[#6878d6] border-amber-500" : "hover:text-[#6878d6]";

  return (
    <motion.nav
      className="text-white bg-[#323264]"
      style={{
        backgroundImage: `linear-gradient(rgba(50, 50, 100, 0.8), rgba(50, 50, 100, 0.8)), url(${currentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Add fade-in animation on route change
    >
      <div className="max-w-7xl mx-auto py-5 px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a className="custom-logo-link" rel="home" aria-label="Digital Agency">
              <img
                className="w-36 md:w-44"
                src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/site-logo-white.svg"
                alt="Logo"
                decoding="async"
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-lg">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/services" className={linkClasses}>Services</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
            <button className='rounded-3xl py-2 text-white px-8 hover:bg-white hover:text-black bg-[#6878d6]'>
              REQUEST QUOTE
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-10 h-10 bg-[#6878d6] mt-3 text-white"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-black flex flex-col">
          <NavLink to="/" className={({ isActive }) => `block px-4 py-2 border-b border-gray-300 ${isActive ? "text-[#6878d6]" : "hover:bg-gray-200"}`}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `block px-4 border-b border-gray-300 py-2 ${isActive ? "text-[#6878d6]" : "hover:bg-gray-200"}`}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `block px-4 py-2 border-b border-gray-300 ${isActive ? "text-[#6878d6]" : "hover:bg-gray-200"}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `block px-4 py-2 ${isActive ? "text-[#6878d6]" : "hover:bg-gray-200"}`}>
            Contact
          </NavLink>
        </div>
      )}

      {/* Banner with Animation on Route Change */}
      <motion.div
        key={location.pathname} // Re-run animation on route change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentBanner}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
