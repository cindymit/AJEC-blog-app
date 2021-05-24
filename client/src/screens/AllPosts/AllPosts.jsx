import React from "react";
import Post from "../../components/Post/Post";
import Layout from "../../components/Layout/Layout";

const AllPosts = () => {
  return (
    <Layout>
      <div>
        <h1>This is "All Posts" page!</h1>
        <Post />
      </div>
    </Layout>
  );
};

export default AllPosts;
