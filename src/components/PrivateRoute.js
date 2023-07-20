import React from "react";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if the user is authenticated
const navigate= useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> :  navigate("/login") 
      }
    />
  );
};

export default PrivateRoute;
