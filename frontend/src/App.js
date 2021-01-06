// import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Board from "./pages/Board";
import ErrorPage from "./pages/ErrorPage";
import Boards from "./pages/Boards";

// import { Login } from "./components";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Context from "./RootContext";

function App() {
  const [jwt, setJwt] = useState();

  useEffect(() => {
    console.log("Starting App");

    let storage = window.localStorage;
    const val = storage.getItem("jwt");
    setJwt(val);
  }, []);

  return (
    <Context.Provider value={{ isLoggedIn: false }}>
      <Router>
        {
          /*
            TODO
            If jwt is not available or expired, go to login
          */
          jwt || <Redirect to="/login" />
        }

        <Navbar>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="btn" to="/boards">
            Boards
          </Link>
          <Link className="btn btn-outline-danger my-2 my-sm-0" to="/login">
            logout
          </Link>
        </Navbar>

        {/* {isLoggedIn ? <Navbar />  : null} */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/boards" component={Boards} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;
