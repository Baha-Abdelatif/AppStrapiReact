import axios from "axios";

import { COMMENTS_URL } from "../config/variables.config"

export const createComment = (postId, comment) => {
  return axios.post(COMMENTS_URL, comment);
}