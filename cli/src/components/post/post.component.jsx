import React from "react";
import { convertInLocaleDate } from "../../utils/dates.tools";
import "./post.styles.css";

export default function Post({ post }) {
  return (
    <div className="post_container">
      <div className="post_title">
        <h2>{post.title}</h2>
        <div className="post_date">{convertInLocaleDate(post.created_at)}</div>
      </div>
      <div className="post_preview">
        <div className="post_image">
          <img
            src={"http://localhost:1337" + post.image.formats.thumbnail.url}
            alt="post thumbnail"
          />
        </div>
        <div className="post_content">
          {post.content.substr(0, 220) + "..."}
        </div>
      </div>
    </div>
  );
}
