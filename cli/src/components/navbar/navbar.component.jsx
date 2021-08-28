import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="default"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit">
            Strapi Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
