import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="btn" to="/boards">
        Boards
      </Link>
      <Link className="btn btn-outline-danger my-2 my-sm-0" to="/login">
        logout
      </Link> */}
      {props.children}
    </nav>
  );
};

export default Navbar;
