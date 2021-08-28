import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { createComment } from "../../../services/comments_api.service";

import "./comment_form.styles.css";

const initialState = {
  pseudo: "",
  content: "Add your comment...",
};

export default function CommentForm({ id, fetchComments }) {
  const [comment, setComment] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComment({ post: id, ...comment });
      setComment(initialState);
      fetchComments();
    } catch (error) {
      console.error(error);
    }
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
            name="pseudo"
            value={comment.pseudo}
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
