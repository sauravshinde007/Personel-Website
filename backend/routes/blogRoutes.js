// backend/routes/blogRoutes.js

const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

const auth = require("../middleware/auth");

// Public routes
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

// Protected routes
router.post("/", auth, createBlog);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

module.exports = router;
