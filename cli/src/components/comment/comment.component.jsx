import React from "react";
import { Grid } from "@material-ui/core";
import { convertInLocaleDate } from "../../utils/dates.tools";
import "./comment.styles.css";

export default function Comment({ comment }) {
  return (
    <div>
      <hr />
      <Grid container spacing={2}>
        <Grid item md={4}>
          <div className="comment_pseudo">{comment.pseudo}</div>
          <div className="comment_published_date">
            {convertInLocaleDate(comment.published_at)}
          </div>
        </Grid>
        <Grid item md={8}>
          {comment.content}
        </Grid>
      </Grid>
    </div>
  );
}
