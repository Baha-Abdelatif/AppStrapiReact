import axios from "axios";

import { COMMENTS_URL, POSTS_URL } from "../config/variables.config"

export const createComment = (comment) => {
  return axios.post(COMMENTS_URL, comment);
}

export const getComments = (post_id) => {
  return axios.get(`${POSTS_URL}/${post_id}/comments`).then(res => res.data);
}

export const findAll = () => {
  return axios.get(COMMENTS_URL).then(res => res.data)
}