// src/Blog.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      {posts.map((post) => (
        <div key={post.id} className="blog-card">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
          <hr className="post-divider" />
        </div>
      ))}
    </div>
  );
};

export default Blog;
