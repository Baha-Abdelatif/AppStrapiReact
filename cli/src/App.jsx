import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./components/posts/posts.component";
import Post from "./components/post/post.component";
import Container from "@material-ui/core/Container";
import Navbar from "./components/navbar/navbar.component";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a0a0a",
    },
    secondary: {
      main: "#f0f0f0",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <div className="App">
          <Router>
            <Navbar />
            <br />
            <Route exact path="/" component={Posts} />
            <Route path="/post/:id" component={Post} />
          </Router>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
