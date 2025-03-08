import React, { useState, useEffect } from "react";
import { IoMdColorPalette } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation

const CustomizeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontColor, setFontColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fontFamily, setFontFamily] = useState("Poppins");

  const location = useLocation(); // Track current route

  // Trigger animation when route changes
  useEffect(() => {
    setIsOpen(false); // Close panel when navigating to a new route
  }, [location.pathname]);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Floating Button - Appear a bit slower from the Right on Route Change */}
      <motion.div
        className={`fixed top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isOpen ? "right-80" : "right-0"
        }`}
        initial={{ x: 200, opacity: 0 }} // Start off-screen on the right
        animate={{ x: 0, opacity: 1 }} // Immediately move to visible position
        transition={{ type: "tween", duration: 0.3 }} // Slightly slower transition
        key={location.pathname} // Re-run animation on route change
      >
        <motion.button
          onClick={togglePanel}
          className="px-4 py-3 bg-white text-black rounded-l shadow-lg flex items-center border-none group hover:bg-blue-600"
        >
          <IoMdColorPalette className="text-blue-600 text-xl group-hover:text-white" />
          {!isOpen && <span className="ml-2 group-hover:text-white">Customize</span>}
        </motion.button>
      </motion.div>

      {/* Customization Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg border-l p-5 w-80 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center shadow mb-5 py-3 px-4 w-full bg-gray-100">
          <h2 className="text-gray-700 font-bold">Digital Agency</h2>
          <button onClick={togglePanel} className="text-xl border p-1 rounded hover:bg-gray-200">
            <RxCross2 />
          </button>
        </div>

        <h2 className="text-sm mb-4 text-gray-700">
          Use the template as-is or try different colors and fonts from the options below.
        </h2>

        {/* Font Color Picker */}
        <label className="block mb-2 font-bold text-sm text-gray-700">Try Other Font Color</label>
        <input
          type="color"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
          className="mb-4"
        />

        {/* Background Color Picker */}
        <label className="block mb-2 font-bold text-sm text-gray-700">Try Other Background Colors</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="mb-4"
        />

        {/* Font Selection */}
        <label className="block mb-2 font-bold text-sm text-gray-700">Try Other Fonts</label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="mb-4 border p-2 w-full"
        >
          <option value="Poppins">Poppins</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>

        {/* Buttons */}
        <button className="btn w-full bg-blue-600 text-white">
          <a
            href="https://wpastra.com/essential-toolkit-pricing/?utm_source=Digital%20Agency&utm_medium=websitedemos&utm_campaign=templatecustomizer"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Buy Now
          </a>
        </button>
        <button className="btn w-full mt-5 border border-blue-600 bg-white hover:bg-blue-600 hover:text-white text-blue-600">
          <a
            href="https://startertemplates.com/docs/getting-started-starter-templates/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Learn how to use this template
          </a>
        </button>
      </div>

      {/* Apply the Selected Font and Background Colors */}
      <style>
        {`
          body {
            font-family: ${fontFamily}, sans-serif;
            color: ${fontColor};
            background-color: ${bgColor};
          }
        `}
      </style>
    </div>
  );
};

export default CustomizeButton;
