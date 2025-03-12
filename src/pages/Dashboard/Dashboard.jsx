import { Outlet, NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaPlus, FaEdit, FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { FiSun } from "react-icons/fi";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Sidebar Navigation */}
      <div className={`fixed inset-y-0 left-0 bg-[#323264] text-white p-4 w-64 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 transition-transform duration-300 ease-in-out`}> 
        <div className="sm:hidden flex justify-end mb-4">
          <button className="text-2xl text-white focus:outline-none" onClick={toggleSidebar}>✕</button>
        </div>
        <ul className="space-y-6">
          <li className="flex items-center">
            <FaHome className="mr-3" />
            <NavLink to="/" className="hover:bg-[#5d60b2] rounded px-4 py-2">Home</NavLink>
          </li>
          <li className="flex items-center">
            <FaPlus className="mr-3" />
            <NavLink to="add-portfolio" className="hover:bg-[#5d60b2] rounded px-4 py-2">Add Portfolio</NavLink>
          </li>
          <li className="flex items-center">
            <FaEdit className="mr-3" />
            <NavLink to="edit-portfolio" className="hover:bg-[#5d60b2] rounded px-4 py-2">Edit Portfolio</NavLink>
          </li>
          <li className="flex items-center">
            <HiUserGroup className="mr-3" />
            <NavLink to="all-users" className="hover:bg-[#5d60b2] rounded px-4 py-2">All Users</NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 transition-all sm:ml-64">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <button className="text-xl p-2 sm:hidden" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <button onClick={toggleDarkMode} className="text-xl p-2 rounded-full border border-[#323264] hover:bg-[#323264]">
            {isDarkMode ? <FiSun className="text-yellow-400" /> : <FaMoon className="text-[#323264] hover:text-white" />}
          </button>
        </div>
        
        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
