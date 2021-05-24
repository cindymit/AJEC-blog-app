import axios from "axios";
import api from "./apiConfig"


//const apiUrl = `https://ajec-blog-app.herokuapp.com`;
const apiUrl = `http://localhost:3000`;

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    const posts = response.data;
    return posts;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    const post = response.data;
    return post;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await api.post(`/posts`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const response = await api.put(`/posts/${id}`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
