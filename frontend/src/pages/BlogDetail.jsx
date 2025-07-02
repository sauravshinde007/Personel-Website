import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const res = await axios.get(`/blogs/${slug}`);
    setBlog(res.data);
  };

  if (!blog) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
      <p className="text-secondary text-sm mb-4">{blog.summary}</p>
      <p className="text-gray-400 text-xs mb-6">
        {new Date(blog.date).toLocaleDateString()} — {blog.author}
      </p>
      <div className="prose prose-invert">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
      {blog.tags && (
        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-tertiary px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
