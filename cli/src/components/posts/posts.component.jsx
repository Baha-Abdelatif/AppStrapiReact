import React, { useEffect, useState } from "react";
import Post from "../post/post.component";
import "./posts.styles.css";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/posts", {
      method: "GET",
      headers: { Accept: "Application/json" },
    })
      .then((res) => res.json())
      .then((datas) => {
        // console.log(datas);
        setPosts(datas);
        setIsLoading(false);
      });
  }, []);

  return !isLoading ? (
    <div className="all_posts">
      <h1>Tous les Articles :</h1>
      <div className="posts_container">
        {posts.map((post, idx) => {
          return <Post post={post} key={idx} />;
        })}
      </div>
    </div>
  ) : (
    <div className="loading_skeleton"></div>
  );
}
