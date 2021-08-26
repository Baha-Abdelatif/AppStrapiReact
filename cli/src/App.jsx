import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./components/posts/posts.component";
import Post from "./components/post/post.component";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Route exact path="/" component={Posts} />
          <Route path="/post/:id" component={Post} />
        </Router>
      </div>
    </Container>
  );
}

export default App;
