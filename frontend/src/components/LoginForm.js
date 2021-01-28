import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
// import { Button } from "react-bootstrap";

import url from "../backend";
import AuthContext from "../AuthContext";

import post from "../utils/post";
import sha256 from "../utils/sha256";
import CheckBox from "./CheckBox";

const LoginForm = (props) => {
  const jwt = useContext(AuthContext);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [isIncorrect, setIsIncorrect] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    console.log(username, password);
    // send backend data

    const content = {
      username,
      password: await sha256(password),
    };
    const data = await post(url + "/login", content);

    jwt.saveJwt(data.jwt);
    if (data.jwt) {
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
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {isIncorrect ? <p>Username or password is incorrect</p> : null}
      <CheckBox
        label="Show password"
        state={showPassword}
        setState={setShowPassword}
      />
      <br />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
      {/* <Button variant="primary" as="input" type="submit" value="Submit" /> */}
      {/* <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} /> */}
    </>
  );
};

export default LoginForm;
