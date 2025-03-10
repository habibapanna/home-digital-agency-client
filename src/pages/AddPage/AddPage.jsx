import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/pages", { title, content });
    navigate("/dashboard");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Add New Page</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Page Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Page Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
      </form>
    </div>
  );
};

export default AddPage;
