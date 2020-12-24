import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" onClick={props.switchToHome}>
        Home
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
              Home <span className="sr-only">(current)</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Link</div>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="dropdown-item">Action</div>
              <div className="dropdown-item">Another action</div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">Something else here</div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link disabled">Disabled</div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>

          <button
            className="btn btn-outline-danger my-2 my-sm-0"
            onClick={props.logout}
          >
            log out
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
