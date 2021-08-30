import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../contexts/auth.context";
import authApiServices from "../../services/auth_api.services";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import BookRoundedIcon from "@material-ui/icons/BookRounded";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

import "./navbar.styles.css";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    authApiServices.logout();
    setIsAuthenticated(false);
    history.replace("/");
  };

  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <div className="nav_elt">
            <HomeRoundedIcon />
            <div>Home</div>
          </div>
        </Link>
        <Link to="/post/1">
          <div className="nav_elt">
            <BookRoundedIcon />
            <div>Blog</div>
          </div>
        </Link>
        {isAuthenticated && (
          <Link to="/admin">
            <div className="nav_elt">
              <DashboardRoundedIcon />
              <div>Admin</div>
            </div>
          </Link>
        )}
        {isAuthenticated && (
          <Link to="#" onClick={handleLogout}>
            <div className="nav_elt">
              <ExitToAppRoundedIcon />
              <div>Logout</div>
            </div>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to="/auth">
            <div className="nav_elt">
              <SupervisorAccountRoundedIcon />
              <div>Login</div>
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
}
