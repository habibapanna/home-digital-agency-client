import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaTachometerAlt, FaPlus, FaEdit, FaTrash, FaCogs, FaHome, FaInfoCircle, FaEnvelope, FaServicestack } from "react-icons/fa";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className={`flex ${isDarkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <div className="w-64 bg-[#31317b] text-white h-screen overflow-y-auto fixed">
        <div className="flex justify-center items-center mt-5">
          <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>
        </div>
        <ul className="mt-10 space-y-3">
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaTachometerAlt className="mr-3" />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaPlus className="mr-3" />
            <Link to="/dashboard/add">Add Item</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaEdit className="mr-3" />
            <Link to="/dashboard/edit">Edit Item</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaTrash className="mr-3" />
            <Link to="/delete-item">Delete Item</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaCogs className="mr-3" />
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <div className="border border-gray-500 mt-5 mb-5"></div>
        <ul>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaHome className="mr-3" />
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaInfoCircle className="mr-3" />
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaServicestack className="mr-3" />
            <Link to="/services">Services</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaEnvelope className="mr-3" />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">Welcome to Admin Dashboard</p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            From here, you can manage everything about the website, including adding, editing, and deleting content.
          </p>

          <div className="mt-8 space-x-4">
            <Link to="/add-item">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add New Item
              </button>
            </Link>
            <Link to="/edit-item">
              <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                Edit Item
              </button>
            </Link>
            <Link to="/delete-item">
              <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Delete Item
              </button>
            </Link>
            <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <button onClick={toggleDarkMode} className="flex items-center justify-start w-full">
              {isDarkMode ? <FaSun className="mr-3" /> : <FaMoon className="mr-3" />}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
