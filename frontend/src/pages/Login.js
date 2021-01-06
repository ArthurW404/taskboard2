import React from "react";
import LoginForm from "../components/LoginForm";

const Login = (props) => {
  return (
    <div>
      <LoginForm />
      <p className="btn btn-link">Sign up</p>
      <p className="btn btn-link">Forgot password</p>
    </div>
  );
};

// const styles = {
//   login: {
//     // border: "1px black solid",
//     margin: "20rem auto",
//     border: " 3px solid green",
//     width: "35%",
//     padding: 5,
//     alignContent: "center",
//     backgroundColor: constants.primaryColor,
//   },
// };

export default Login;
