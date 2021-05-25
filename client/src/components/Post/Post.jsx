import { useEffect, useState } from "react";
import { getPosts } from "../../services/posts.js";
import { Link } from "react-router-dom"
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post-container">
      <h4>{post.username}</h4>
      <hr></hr>
      <Link path to={`/post/${post._id}`} className="title-link">
        <h2>{post.title}</h2>
      </Link>
      <hr></hr>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
