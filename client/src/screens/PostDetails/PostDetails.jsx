import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getPost, deletePost } from "../../services/posts"
import Layout from "../../components/Layout/Layout"
import "./PostDetails.css"



const PostDetails = (props) => {

  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      console.log(post)
      setPost(post)
      setLoaded(true)
      
    }
    fetchPost()
  }, [id])
  
  
  if (!isLoaded) {
    return <h1>Loading...</h1>

    
  }


  return (
    <Layout> 
      <div className="post-detail">

        <div className="title">{post.title}</div>
        <div className="content">{post.content}</div>
        <div className="username">{post.username}</div>
        <button className="edit-button"><Link className="edit-link" to={`/post/${post._id}/edit`}>Edit</Link></button>
        <button className="delete-button" onClick={()=>deletePost(post._id)}>delete</button>
      </div>
      </Layout>
  );
};

export default PostDetails;