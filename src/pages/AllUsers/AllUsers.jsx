import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // Show success message using SweetAlert
          Swal.fire({
            title: "Success!",
            text: "User promoted to admin successfully!",
            icon: "success",
            confirmButtonColor: "#6878d6",
          });

          // Update UI state
          setUsers(users.map(user => 
            user._id === id ? { ...user, role: "admin" } : user
          ));
        }
      })
      .catch((error) => console.error("Error updating user role:", error));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">All Registered Users</h2>
      
      {/* Make the table scrollable on smaller screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="">
              <th className="p-2 border text-xs sm:text-sm">Name</th>
              <th className="p-2 border text-xs sm:text-sm">Email</th>
              <th className="p-2 border text-xs sm:text-sm">Joined At</th>
              <th className="p-2 border text-xs sm:text-sm">Role</th>
              <th className="p-2 border text-xs sm:text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border">
                <td className="p-2 border text-xs sm:text-sm">{user.name}</td>
                <td className="p-2 border text-xs sm:text-sm">{user.email}</td>
                <td className="p-2 border text-xs sm:text-sm">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2 border text-xs sm:text-sm">{user.role || "user"}</td>
                <td className="p-2 border">
                  {user.role === "admin" ? (
                    <button className="bg-green-500 text-white px-3 py-1 rounded cursor-not-allowed" disabled>
                      Admin
                    </button>
                  ) : (
                    <button 
                      className="bg-[#6878d6] text-white px-3 py-1 rounded hover:bg-blue-800 transition"
                      onClick={() => handleMakeAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
