import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 5; // ✅ Number of blogs per page

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/blogs");
      console.log("Fetched blogs in frontend:", res.data);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  // ✅ Calculate start & end indexes for slicing
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // ✅ Calculate total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Articles</p>
        <h2 className={styles.sectionHeadText}>Blogs</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 grid-col-12">
        {currentBlogs.map((blog, index) => (
          <Link
            key={blog._id}
            to={`/blogs/${blog.slug}`}
            className="block"
          >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.2, 0.8)}
              whileHover={{ scale: 1.05, transition: { type: "tween", duration: 0.15, ease: "easeOut" } }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-300 text-lg mb-2">{blog.summary}</p>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(blog.date).toLocaleDateString()} — {blog.author}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* ✅ Pagination Buttons */}
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
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
