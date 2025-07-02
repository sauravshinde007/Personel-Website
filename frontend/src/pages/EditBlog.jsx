import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const EditBlog = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    tags: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/admin");
    }
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const res = await axios.get(`/blogs`);
    const blog = res.data.find((b) => b._id === id);
    if (blog) {
      setForm({
        ...blog,
        tags: blog.tags.join(", "),
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/blogs/${id}`, {
        ...form,
        tags: form.tags.split(",").map((tag) => tag.trim()),
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/blogs");
      window.location.reload();
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Update failed");
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="p-2 rounded text-white"
          required
        />
        <input
          type="text"
          name="summary"
          value={form.summary}
          onChange={handleChange}
          className="p-2 rounded text-white"
          required
        />
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          className="p-2 rounded text-white"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          rows="10"
          className="p-2 rounded text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-tertiary px-4 py-2 rounded hover:bg-purple-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
