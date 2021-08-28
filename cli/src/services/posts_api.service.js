import { POSTS_URL } from "../config/variables.config";

export const findAll = () => {
  return fetch(`${POSTS_URL}`, {
    method: "GET",
    headers: { Accept: "Application/json" },
  })
    .then((res) => res.json())
    .catch(err => {
      console.error(err)
    })
}

export const findOne = (id) => {
  return fetch(`${POSTS_URL}/${id}`, {
    method: "GET",
    headers: { Accept: "Application/json" },
  })
    .then((res) => res.json())
    .catch(err => {
      console.error(err)
    })
}