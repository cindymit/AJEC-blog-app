import { useState } from "react";
import * as controller from "../../services/posts.js";

function Post(props) {
  const post = controller.getProducts.map((post) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <h4>{post.username}</h4>
        <p>{post.content}</p>
      </div>
    );
  });

  return <div>{post}</div>;
}

export default Post;
