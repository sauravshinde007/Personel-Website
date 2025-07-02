import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { styles } from "../styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      <h2 className={`${styles.sectionHeadText} font-bold mb-2`}>{blog.title}</h2>
      <p className={`text-3xl text-secondary mb-4`}>{blog.summary}</p>
      <p className="text-gray-400 text-xl mb-6">
        {new Date(blog.date).toLocaleDateString()} — {blog.author}
      </p>
      <div className="text-2xl leading-8">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
      {blog.tags && (
        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-tertiary px-2 py-1 rounded text-xl"
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
