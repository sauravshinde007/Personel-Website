import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const NewBlog = () => {
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
  }, []);

  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tagsArray = form.tags
        ? form.tags.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
        : [];

      const payload = {
        ...form,
        tags: tagsArray,
      };

      console.log("Submitting payload:", payload);

      await axios.post(
        "/blogs",
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      navigate("/blogs");
      window.location.reload();
    } catch (err) {
      console.error("Error creating blog:", err.response?.data || err);
      alert("Create failed");
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="p-2 rounded text-white"
          required
        />
        <input
          type="text"
          name="summary"
          placeholder="Summary"
          onChange={handleChange}
          className="p-2 rounded text-white"
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          onChange={handleChange}
          className="p-2 rounded text-white"
        />
        <textarea
          name="content"
          placeholder="Markdown content"
          rows="10"
          onChange={handleChange}
          className="p-2 rounded text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-tertiary px-4 py-2 rounded hover:bg-purple-700"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
