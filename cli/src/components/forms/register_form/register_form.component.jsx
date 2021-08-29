import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./register_form.styles.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  password_confirm: "",
};

export default function RegisterForm() {
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
    console.log(user);
    // try {
    //   await createComment({ post: id, ...user });
    //   setUser(initialState);
    //   fetchComments();
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <form className="register_form" autoComplete="off" onSubmit={handleSubmit}>
      <h3>Sign Up :</h3>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <TextField
            autoComplete="off"
            onChange={handleChange}
            id="register_user_username"
            label="Username"
            type="text"
            fullWidth
            name="username"
            value={user.username}
            color="secondary"
          />
          <TextField
            autoComplete="off"
            onChange={handleChange}
            id="register_user_email"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={user.email}
            color="secondary"
          />
          <TextField
            autoComplete="off"
            id="register_user_password"
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={user.password}
            onChange={handleChange}
            color="secondary"
          />
          <TextField
            autoComplete="off"
            id="register_user_password2"
            label="Confirm Password"
            type="password"
            fullWidth
            name="password_confirm"
            value={user.password_confirm}
            onChange={handleChange}
            color="secondary"
          />
        </Grid>
      </Grid>
      <div className="button_container">
        <Button
          variant="contained"
          type="submit"
          id="register_submit_comment"
          color="secondary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
