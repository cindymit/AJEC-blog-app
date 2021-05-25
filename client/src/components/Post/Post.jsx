import { useEffect, useState } from "react";
import { getPosts } from "../../services/posts.js";
import {Link} from "react-router-dom"

function Post({ post }) {
  return (
    <div>
      <Link path to= "/post/:id">
        <h2>{post.title}</h2>
        </Link>
      <h4>{post.username}</h4>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
