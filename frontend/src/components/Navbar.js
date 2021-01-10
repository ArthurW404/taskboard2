import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {props.children}
    </nav>
  );
};

export default Navbar;
