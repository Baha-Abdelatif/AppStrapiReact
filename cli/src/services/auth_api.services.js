import { LOGIN_URL } from "../config/variables.config";

import axios from "axios"

export const login = (credentials) => {
  return axios.post(LOGIN_URL, credentials)
    .then(res => res.data)
    .then(data => {
      window.localStorage.setItem("authToken", data.jwt);
      window.localStorage.setItem("username", data.user.username);
      axios.defaults.headers["authorization"] = "Bearer " + data.jwt;
    })
}