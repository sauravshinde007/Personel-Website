import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/admin");
    }
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await axios.get("/blogs");
    setBlogs(res.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchBlogs();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <Link to="/admin/new" className="bg-tertiary px-4 py-2 rounded mb-4 inline-block">Create New Blog</Link>
      <div className="mt-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border-b border-gray-500 py-2 flex justify-between">
            <span>{blog.title}</span>
            <div className="flex gap-2">
              <Link to={`/admin/edit/${blog._id}`} className="text-blue-400">Edit</Link>
              <button onClick={() => handleDelete(blog._id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
