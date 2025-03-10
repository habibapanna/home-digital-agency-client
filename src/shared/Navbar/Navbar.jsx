import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../../components/Banner/Banner";
import Banner1 from "../../components/Banner1/Banner1";
import Banner2 from "../../components/Banner2/Banner2";
import Banner3 from "../../components/Banner3/Banner3";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logOutUser } = useContext(AuthContext);

  const backgrounds = {
    "/": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/home-hero-bg.jpg",
    "/services": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/about-bg-img.jpg",
    "/about": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/about-bg-img.jpg",
    "/contact": "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/01/about-bg-img.jpg",
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
      transition={{ duration: 0.5 }}
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
            
            {user ? (
              // <button onClick={logOutUser} className="rounded-3xl py-2 px-8 bg-red-500 text-white hover:bg-white hover:text-black">
              //   Logout ({user.displayName || "User"})
              // </button>
              <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1  text-white bg-[#6878d6] hover:bg-[#6a68d6]"> ({user.displayName || "User"})  ⬇️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li>
            <button className="rounded py-2 btn px-12 text-white hover:bg-white hover:text-black bg-[#6878d6]">
            <Link to="/dashboard"> Dashboard</Link>
            </button></li>

    <li><button onClick={logOutUser} className="rounded py-2 bg-red-500 btn text-white hover:bg-white hover:text-black">
                Logout
              </button></li>
  </ul>
</div>
            ) : (
              <NavLink to="/login">
                <button className="rounded-3xl py-2 px-8 bg-[#6878d6] text-white hover:bg-white hover:text-black">
                  REQUEST QUOTE
                </button>
              </NavLink>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-10 h-10 bg-[#6878d6] mt-3 text-white"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-700 flex flex-col">
          <NavLink to="/" className="block px-4 py-2 border-b border-gray-300 hover:text-[#6878d6]">Home</NavLink>
          <NavLink to="/services" className="block px-4 py-2 border-b border-gray-300 hover:text-[#6878d6]">Services</NavLink>
          <NavLink to="/about" className="block px-4 py-2 border-b border-gray-300 hover:text-[#6878d6]">About</NavLink>
          <NavLink to="/contact" className="block px-4 py-2 border-b border-gray-300 hover:text-[#6878d6]">Contact</NavLink>
          
          {/* Add buttons inside mobile menu */}
          {user ? (
             <div className="dropdown dropdown-start">
             <div tabIndex={0} role="button" className="btn w-full m-1 text-white bg-[#6878d6] hover:bg-[#6a68d6]"> ({user.displayName || "User"})  ⬇️</div>
             <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
               <li>
                       <button className="rounded py-2 btn px-12 text-white hover:bg-white hover:text-black bg-[#6878d6]">
                       <Link to="/dashboard"> Dashboard</Link>
                       </button></li>
           
               <li><button onClick={logOutUser} className="rounded py-2 bg-red-500 btn text-white hover:bg-white hover:text-black">
                           Logout
                         </button></li>
             </ul>
           </div>
          ) : (
            <NavLink to="/login">
              <button className="block w-full py-2 text-center bg-[#6878d6] text-white hover:bg-white hover:text-black">
                REQUEST QUOTE
              </button>
            </NavLink>
          )}
        </div>
      )}

      {location.pathname !== "/login" && (
        <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {currentBanner}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
