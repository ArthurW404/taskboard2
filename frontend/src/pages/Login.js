import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = (props) => {
  return (
    <div>
      <LoginForm />
      <Link to="/signup" className="btn btn-link">
        Sign up
      </Link>
      <Link to="/forgotPassword" className="btn btn-link">
        Forgot password
      </Link>
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
