import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./comment_form.styles.css";
const initialState = {
  username: "",
  content: "Add your comment...",
};
export default function CommentForm({ id }) {
  const [comment, setComment] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment(initialState);
  };
  return (
    <form
      className="comment_form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item md={4}>
          <h3>Leave a Comment :</h3>
          <TextField
            onChange={handleChange}
            id="standard-basic"
            label="Username"
            fullWidth
            name="username"
            value={comment.username}
            color="secondary"
          />
        </Grid>
        <Grid item md={8}>
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            name="content"
            value={comment.content}
            onChange={handleChange}
            color="secondary"
          />
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
        </Grid>
      </Grid>
    </form>
  );
}
