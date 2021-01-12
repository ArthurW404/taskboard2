import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const submit = () => {
    console.log(email);
  };
  return (
    <Container>
      <label>Enter your email: </label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <Button as="input" type="submit" value="Submit" onClick={submit} />
    </Container>
  );
};

export default ForgotPassword;
