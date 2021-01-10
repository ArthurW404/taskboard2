import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import url from "../backend";
import AuthContext from "../AuthContext";
import sha256 from "../utils/sha256";

const LoginForm = (props) => {
  const jwt = useContext(AuthContext);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [isIncorrect, setIsIncorrect] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    console.log(username, password);
    // send backend data

    const content = {
      username,
      password: await sha256(password),
    };

    fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(content),
    })
      .then((res) => res.json())
      .then((data) => {
        jwt.saveJwt(data);
        if (data) {
          // switch to account screen
          console.log("logged in");
          setIsLoggedIn(true);
        } else {
          console.log("wrong pass");
          // stay in login
          setPassword("");
          setIsIncorrect(true);
        }
      })
      .catch((err) => console.log(err));
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
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {isIncorrect ? <p>Username or password is incorrect</p> : null}
      <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
    </>
  );
};

export default LoginForm;
