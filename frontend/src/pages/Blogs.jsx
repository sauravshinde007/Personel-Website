import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Articles</p>
        <h2 className={styles.sectionHeadText}>Blogs</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog._id}
            variants={fadeIn("up", "spring", index * 0.2, 0.8)}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-300 text-sm mb-2">{blog.summary}</p>
            <p className="text-gray-500 text-xs mb-2">
              {new Date(blog.date).toLocaleDateString()} — {blog.author}
            </p>
            <Link to={`/blogs/${blog.slug}`} className="text-blue-400 underline">
              Read more
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
