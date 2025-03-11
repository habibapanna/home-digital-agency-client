import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AddPage = () => {
  const [URI, setURI] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/portfolios", { URI });
      
      // Show success message
      Swal.fire({
        icon: "success",
        title: "Added Successfully!",
        text: "The new portfolio has been added.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/dashboard"); // Redirect after success
      });

    } catch (error) {
      // Handle error case
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };


  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Add New Portfolio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Portfolio Link"
          value={URI}
          onChange={(e) => setURI(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="px-4 py-2 bg-[#6878d6] hover:bg-blue-800 text-white rounded">Add</button>
      </form>
    </div>
  );
};

export default AddPage;
