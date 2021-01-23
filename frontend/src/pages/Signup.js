import React, { useState, useContext } from "react";
import { Button, Container } from "react-bootstrap";
import AuthContext from "../AuthContext";
import post from "../utils/post";
import url from "../backend";
import { Redirect } from "react-router-dom";
import sha256 from "../utils/sha256";
import CheckBox from "../components/CheckBox";

const Signup = () => {
  console.log("rendering signup");
  const jwt = useContext(AuthContext);

  const [newUser, setNewUser] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (password1 === password2) {
      // password matches
      console.log("password matches");
      const hashedPass = await sha256(password1);

      const data = await post(url + "/signup", {
        newUser,
        password: hashedPass,
      });
      jwt.saveJwt(data);
      console.log(jwt.jwt);
    } else {
      console.log("password does not match");
    }
  };

  return (
    <Container>
      {jwt.jwt ? <Redirect to="/boards" /> : null}
      <label>New Email:</label>
      <input
        type="text"
        value={newUser}
        onChange={(event) => setNewUser(event.target.value)}
      />
      <br />
      <label>New Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        value={password1}
        onChange={(event) => setPassword1(event.target.value)}
      />
      <br />
      <label>Confirm Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        value={password2}
        onChange={(event) => setPassword2(event.target.value)}
      />
      <br />
      <CheckBox
        label="Show password"
        state={showPassword}
        setState={setShowPassword}
      />
      <br />
      <Button as="input" type="submit" onClick={() => handleSubmit()} />
    </Container>
  );
};

export default Signup;
