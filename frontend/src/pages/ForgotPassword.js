import React, { useState } from "react";

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
      <input type="submit" value="Submit" onClick={submit} />
    </>
  );
};

export default ForgotPassword;
