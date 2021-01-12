import React from "react";
import { Button, Container } from "react-bootstrap";

const Signup = () => {
  return (
    <Container>
      <label>New Email:</label>
      <input type="text" />
      <br />
      <label>New Password:</label>
      <input type="text" />
      <br />
      <label>Confirm Password:</label>
      <input type="text" />
      <br />

      <Button as="input" type="submit" />
    </Container>
  );
};

export default Signup;
