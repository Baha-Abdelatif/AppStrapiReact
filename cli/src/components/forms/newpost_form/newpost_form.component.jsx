import React, { useState } from "react";

import { createPost } from "../../../services/posts_api.service";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./newpost_form.styles.css";

const initialState = {
  title: "",
  content: "Lorem Ipsum...",
  image: "",
};

export default function NewpostForm() {
  const [post, setPost] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(post);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a new post</h3>
      <TextField
        id="post_title"
        label="Post Title"
        type="text"
        variant="outlined"
        name="title"
        value={post.title}
        className="form_text_input"
        onChange={handleChange}
      />
      <TextField
        id="post_content"
        label="Post Content"
        multiline
        rows={8}
        name="content"
        value={post.content}
        variant="outlined"
        className="form_text_input"
        onChange={handleChange}
      />
      <input
        type="file"
        accept="image/*"
        name="image"
        id="post_image"
        value={post.image}
        onChange={handleChange}
      />
      <div className="button_container">
        <Button
          variant="contained"
          type="submit"
          id="submit_newpost"
          color="secondary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
