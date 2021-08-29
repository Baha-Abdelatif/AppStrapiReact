import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthContext from "./contexts/auth.context";

import auth_apiServices from "./services/auth_api.services";

import Posts from "./pages/posts/posts.component";
import Post from "./pages/post/post.component";
import LoginPage from "./pages/login/login.component";
import AdminPage from "./pages/admin/adminPage.component";

import Navbar from "./components/navbar/navbar.component";
import PrivateRoute from "./components/private_route/private_route.component";

import Container from "@material-ui/core/Container";
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
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth_apiServices.isAuthenticated
  );
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <MuiThemeProvider theme={theme}>
        <Container>
          <div className="App">
            <Router>
              <Navbar />
              <br />
              <Route exact path="/" component={Posts} />
              <Route path="/post/:id" component={Post} />
              <Route exact path="/auth" component={LoginPage} />
              <PrivateRoute exact path="/admin" component={AdminPage} />
            </Router>
          </div>
        </Container>
      </MuiThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
