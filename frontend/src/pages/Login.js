import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import authContext from "../AuthContext";
import LoginForm from "../components/LoginForm";

const Login = (props) => {
  const jwt = useContext(authContext);
  return (
    <Container>
      {jwt.jwt ? <Redirect to="/boards" /> : null}
      <LoginForm />
      <Link to="/signup" className="btn btn-link">
        Sign up
      </Link>
      <Link to="/forgotPassword" className="btn btn-link">
        Forgot password
      </Link>
    </Container>
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
