import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import Context from "../AuthContext";

const ProtectedRoute = (props) => {
  const context = useContext(Context);
  return (
    <>
      {context.jwt ? <Route {...props} /> : <Redirect to={props.redirectTo} />}
    </>
  );
};

export default ProtectedRoute;
