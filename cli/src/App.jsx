import React from "react";
import Posts from "./components/posts/posts.component";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container>
      <div className="App">
        <Posts />
      </div>
    </Container>
  );
}

export default App;
