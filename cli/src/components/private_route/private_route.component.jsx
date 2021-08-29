import React, { useContext } from "react";

import { useHistory, Redirect, Route } from "react-router-dom";

import AuthContext from "../../contexts/auth.context";

export default function PrivateRoute({ path, component }) {
  const { isAuthenticated } = useContext(AuthContext);
  const { location } = useHistory();

  return isAuthenticated ? (
    <Route exact path={path} component={component} />
  ) : location.pathname === "/auth" ? (
    <Redirect to="/auth" />
  ) : (
    <Redirect to="/" />
  );
}
