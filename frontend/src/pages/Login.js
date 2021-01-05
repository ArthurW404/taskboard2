import React from "react";
import LoginForm from "../components/LoginForm";

import constants from "../constants";

const Login = (props) => {
  return (
    <div style={styles.login}>
      <LoginForm />
      <div>Sign up</div>
      <div>Forgot password</div>
    </div>
  );
};

const styles = {
  login: {
    // border: "1px black solid",
    margin: "20rem auto",
    border: " 3px solid green",
    width: "35%",
    padding: 10,
    alignContent: "center",
    backgroundColor: constants.primaryColor,
  },
};

export default Login;
