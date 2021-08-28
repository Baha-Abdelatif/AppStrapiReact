import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import MediaCard from "../../components/cardPost/cardPost.component";
import "./posts.styles.css";
import { findAll } from "../../services/posts_api.service";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  const initialLoad = async () => {
    const datas = await findAll();
    if (datas) {
      setPosts(datas);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  useEffect(() => {
    initialLoad();
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
