import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import MediaCard from "../cardPost/cardPost.component";
import "./posts.styles.css";
import { API_URL } from "../../config/variables.config";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/posts`, {
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
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {posts.map((post) => {
            return <MediaCard post={post} key={post.id} />;
          })}
        </Grid>
      </div>
    </div>
  ) : (
    <Box>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </Box>
  );
}
