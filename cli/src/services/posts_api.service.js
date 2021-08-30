import axios from "axios";

import { POSTS_URL } from "../config/variables.config";

export const findAll = () => {
  return axios.get(`${POSTS_URL}`)
    .then((res) => res.data)
}

export const findOne = (id) => {
  return axios.get(`${POSTS_URL}/${id}`)
    .then((res) => res.data)
}

export const createPost = (post) => {
  return axios.post(POSTS_URL, post)
}