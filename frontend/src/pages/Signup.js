import React from "react";

const Signup = () => {
  return (
    <>
      <label>New Email:</label>
      <input type="text" />
      <br />
      <label>New Password:</label>
      <input type="text" />
      <br />
      <label>Confirm Password:</label>
      <input type="text" />
      <br />

      <input type="submit" />
    </>
  );
};

export default Signup;
