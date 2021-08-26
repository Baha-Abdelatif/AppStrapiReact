import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { convertInLocaleDate } from "../../utils/dates.tools";
import { API_URL } from "../../config/variables.config";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${API_URL}${post.image.formats.thumbnail.url}`}
          title="post thumbnail"
          alt="post thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {convertInLocaleDate(post.created_at)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.content.substr(0, 220) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Lire L'Article
        </Button>
      </CardActions>
    </Card>
  );
}
