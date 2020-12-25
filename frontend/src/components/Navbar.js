import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" onClick={props.switchToHome}>
        Home
      </div>
      <button
        className="btn btn-outline-danger my-2 my-sm-0"
        onClick={props.logout}
      >
        logout
      </button>
    </nav>
  );
};

export default Navbar;
