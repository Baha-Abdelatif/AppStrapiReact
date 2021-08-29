import React, { useState } from "react";
import { login } from "../../../services/auth_api.services";

import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./login_form.styles.css";

const initialState = {
  identifier: "",
  password: "",
};

export default function LoginForm() {
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
    // try {
    //   await createComment({ post: id, ...user });
    //   setUser(initialState);
    //   fetchComments();
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <form className="login_form" autoComplete="off" onSubmit={handleSubmit}>
      <h3>Sign In :</h3>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <TextField
            autoComplete="off"
            onChange={handleChange}
            id="user_identifier"
            label="Email"
            type="email"
            fullWidth
            name="identifier"
            value={user.identifier}
            color="secondary"
          />
          <TextField
            autoComplete="off"
            id="user_password"
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={user.password}
            onChange={handleChange}
            color="secondary"
          />
        </Grid>
      </Grid>
      <div className="button_container">
        <Button
          variant="contained"
          type="submit"
          id="submit_comment"
          color="secondary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
