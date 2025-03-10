import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/pages/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/pages/${id}`, { title, content });
    navigate("/dashboard");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Edit Page</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded" />
        <button className="px-4 py-2 bg-green-500 text-white rounded">Update</button>
      </form>
    </div>
  );
};

export default EditPage;
