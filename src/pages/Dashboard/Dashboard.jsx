import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaTachometerAlt, FaPlus, FaEdit, FaHome, FaInfoCircle, FaEnvelope, FaServicestack, FaUserFriends } from "react-icons/fa";

const Dashboard = () => {

  return (
    <div>
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
            <FaUserFriends className="mr-3" />
            <Link to="/dashboard/all-users">AllUsers</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaPlus className="mr-3" />
            <Link to="/dashboard/add">Add Portfolio</Link>
          </li>
          <li className="px-4 py-3 flex items-center hover:bg-gray-700">
            <FaEdit className="mr-3" />
            <Link to="/dashboard/edit">Edit Portfolio</Link>
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
        <div className="bg-white dark:bg-gray-900 shadow-lg p-6 flex justify-between">
          <div className="w-2/3">
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">Welcome to Admin Dashboard</p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            From here, you can manage everything about the website, including adding, editing, and deleting content.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
