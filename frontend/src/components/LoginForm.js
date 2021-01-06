import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [isIncorrect, setIsIncorrect] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    return true;
  };

  const handleSubmit = (event) => {
    console.log(username, password);
    // send backend data
    const loginSuccess = login(username, password);

    if (loginSuccess) {
      // switch to account screen
      console.log("logged in");
      setIsLoggedIn(true);
    } else {
      console.log("wrong pass");
      // stay in login
      setPassword("");
      setIsIncorrect(true);
    }
  };

  return (
    <>
      {isLoggedIn && <Redirect to="/boards" />}
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {isIncorrect ? <p>Username or password is incorrect</p> : null}
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </>
  );
};

export default LoginForm;
