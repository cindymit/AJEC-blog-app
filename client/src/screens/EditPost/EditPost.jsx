import React from 'react';
import { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { getPost, updatePost } from '../../services/posts'
import {useParams, Redirect} from 'react-router-dom'


const EditPost = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    username: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()
  

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    
    }
    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to ={`/post/${id}`}/>
  }

  return (
    <Layout>
      <div>
        <form className='edit-form' onSubmit={handleSubmit}>
        <input
            className="edit-title"
            placeholder="Title"
            value={post.title}
            name='title'
            required
            onChange={handleChange}
          />
          <textarea
            className="edit-content"
            placeholder="Post"
            value={post.content}
            name='content'
            required
            onChange={handleChange}
          />
          <input
            className="edit-username"
            placeholder="Username"
            value={post.username}
            name='username'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>Save</button>
        </form>
      </div>
      </Layout>
  );
};

export default EditPost;