import { useEffect, useState } from "react";
import { getPosts } from "../../services/posts.js";

function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.username}</h4>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
