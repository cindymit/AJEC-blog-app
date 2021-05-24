import React from "react";
import Post from "../../components/Post/Post";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/posts";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <div>
        <h1>This is "All Posts" page!</h1>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default AllPosts;
