import React, { useState } from "react";
// import { Button, Container } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const submit = () => {
    console.log(email);
  };
  return (
    <>
      <label>Enter your email: </label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </>
  );
};

export default ForgotPassword;
