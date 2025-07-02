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

      <div className="mt-8 grid gap-6 grid-col-12">
        {blogs.map((blog, index) => (
          <Link
            key={blog._id}
            to={`/blogs/${blog.slug}`}
            className="block"
          >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.2, 0.8)}
              whileHover={{ scale: 1.05, transition: {  type: "tween", duration: 0.15, ease: "easeOut" } }}
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
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
