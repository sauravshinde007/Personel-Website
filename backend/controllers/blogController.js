// backend/controllers/blogController.js

const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const { title, summary, content , tags } = req.body;
  console.log("Received createBlog payload:", req.body);
   // Auto generate slug from title and random string
  const slug = `${title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")}-${Math.random().toString(36).substring(2, 8)}`;

  try {
    const newBlog = new Blog({
      title,
      summary,
      content,
      slug,
      tags
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Create Blog Error:", err);
    res.status(400).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { title, summary, content, tags } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, summary, content, tags },
      { new: true }
    );
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
