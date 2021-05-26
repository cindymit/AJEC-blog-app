import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import "./CreatePost.css";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const CreatePost = (props) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    username: "",
  });
  const [isCreated, setCreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const created = await createPost(post);
    setCreated({ created });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  if (isCreated) {
    return <Redirect to={"/"} />;
  }

  return (
    <Layout>
      <div className="form-div">
        <form className="create-form" onSubmit={handleSubmit}>
          <input
            className="input-username"
            placeholder="Username"
            value={post.username}
            name="username"
            required
            onChange={handleChange}
          />
          <input
            className="input-title"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            onChange={handleChange}
          />
          <textarea
            className="input-content"
            placeholder="Post"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
