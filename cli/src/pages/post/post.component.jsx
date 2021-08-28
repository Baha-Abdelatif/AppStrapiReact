import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { findAll, findOne } from "../../services/posts_api.service";
import { convertInLocaleDate } from "../../utils/dates.tools";
import { API_URL } from "../../config/variables.config";

import Comment from "../../components/comment/comment.component";
import CommentForm from "../../components/forms/comment_form/comment_form.component";
import "./post.styles.css";

export default function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [postLength, setPostsLength] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  const initialLoad = async () => {
    const fetchedPost = await findOne(id);
    if (fetchedPost) {
      setPost(fetchedPost);
      setComments(fetchedPost.comments);
    }
    const posts = await findAll();
    if (posts) {
      setPostsLength(posts.length);
    }
    posts && fetchedPost ? setIsLoading(false) : setIsLoading(true);
  };

  useEffect(() => {
    initialLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return !isLoading ? (
    <div className="post_container">
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <h2>{post.title}</h2>
          <img
            src={API_URL + post.image.formats.medium.url}
            alt="post thumbnail"
          />
        </Grid>
        <Grid item sm={6}>
          <div className="post_date">
            {convertInLocaleDate(post.created_at)}
          </div>
          <div className="post_content">{post.content}</div>
          <div className="post_navlinks">
            {post.id > 1 && <Link to={`/post/${post.id - 1}`}>← Previous</Link>}
            {postLength && post.id < postLength && (
              <Link to={`/post/${post.id + 1}`}>Next →</Link>
            )}
          </div>
        </Grid>
      </Grid>
      <div className="comments_container">
        <CommentForm id={post.id} />
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
      </div>
    </div>
  ) : (
    <Box>
      <Skeleton variant="text" width={300} height={80} />
      <Skeleton variant="text" width={300} height={20} />
      <Skeleton variant="rect" width={300} height={150} />
      <Skeleton variant="text" width={300} height={40} />
      <Skeleton variant="text" width={300} height={40} />
      <Skeleton variant="text" width={300} height={40} />
      <Skeleton variant="text" width={300} height={40} />
      <Skeleton variant="text" width={300} height={40} />
      <Skeleton variant="text" width={300} height={40} />
    </Box>
  );
}
