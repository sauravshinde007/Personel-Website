import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 5;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  // ✅ Get all unique tags from blogs
  const allTags = [...new Set(blogs.flatMap(blog => blog.tags || []))];

  // ✅ Filter blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesTitle = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? blog.tags?.includes(selectedTag) : true;
    return matchesTitle && matchesTag;
  });

  // ✅ Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // ✅ Reset to first page when search or tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTag]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Articles</p>
        <h2 className={styles.sectionHeadText}>Blogs</h2>
      </motion.div>

      {/* ✅ Search bar */}
      <div className="mt-5 flex justify-center">
        <input
          type="text"
          placeholder="Search blogs by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-tertiary w-full max-w-md"
        />
      </div>

      {/* ✅ Tag filters */}
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        <button
          onClick={() => setSelectedTag("")}
          className={`px-3 py-1 rounded-full border ${
            selectedTag === "" ? "bg-tertiary text-white" : "bg-gray-700 text-gray-300 hover:bg-tertiary hover:text-white"
          } transition`}
        >
          All
        </button>
        {allTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full border ${
              selectedTag === tag ? "bg-tertiary text-white" : "bg-gray-700 text-gray-300 hover:bg-tertiary hover:text-white"
            } transition`}
          >
            #{tag}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog, index) => (
            <Link
              key={blog._id}
              to={`/blogs/${blog.slug}`}
              className="block"
            >
              <motion.div
                variants={fadeIn("up", "spring", index * 0.2, 0.8)}
                whileHover={{ scale: 1.05, transition: { type: "tween", duration: 0.09, ease: "easeOut" } }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-800 text-white p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-300 text-lg mb-2">{blog.summary}</p>
                <p className="text-gray-500 text-sm mb-2">
                  {new Date(blog.date).toLocaleDateString()} — {blog.author}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {blog.tags?.map((tag, i) => (
                    <span key={i} className="bg-tertiary px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400 mt-10">No blogs found.</p>
        )}
      </div>

      {/* ✅ Pagination */}
      {filteredBlogs.length > blogsPerPage && (
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
