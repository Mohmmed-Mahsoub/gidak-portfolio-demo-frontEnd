import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "./../context/userContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(Context);
  return (
    <Route
      render={() => {
        console.log(children);
        return user ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
