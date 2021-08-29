/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_URL } from "../config/variables.config";

import axios from "axios"
import jwtDecode from "jwt-decode";

export const login = (credentials) => {
  return axios.post(LOGIN_URL, credentials)
    .then(res => res.data)
    .then(data => {
      window.localStorage.setItem("authToken", data.jwt);
      window.localStorage.setItem("username", data.user.username);
      axios.defaults.headers["authorization"] = "Bearer " + data.jwt;
      // console.log(isAuthenticated())
    })
}

const isAuthenticated = () => {
  const token = window.localStorage.getItem("authToken");

  if (token) {
    const { exp } = jwtDecode(token)
    if (exp * 1000 > new Date().getTime()) {
      return true
    }
  }
  return false
}

export default {
  isAuthenticated,
  login
}