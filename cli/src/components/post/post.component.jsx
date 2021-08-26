import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/variables.config";
import { convertInLocaleDate } from "../../utils/dates.tools";
import "./post.styles.css";

export default function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}`)
      .then((res) => res.json())
      .then((datas) => {
        setPost(datas);
        // console.log(datas);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return post ? (
    <div className="post_container">
      {console.log(post)}
      <div className="post_title">
        <h2>{post.title}</h2>
        <div className="post_date">{convertInLocaleDate(post.created_at)}</div>
      </div>
      <div className="post_preview">
        <div className="post_image">
          <img
            src={"http://localhost:1337" + post.image.formats.medium.url}
            alt="post thumbnail"
          />
        </div>
        <div className="post_content">{post.content}</div>
      </div>
    </div>
  ) : (
    <div className="no_post">No Post Found</div>
  );
}
