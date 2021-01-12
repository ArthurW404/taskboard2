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

import AuthContext from "./AuthContext";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

  const saveJwt = (newJwt) => {
    setJwt(newJwt);
    localStorage.setItem("jwt", newJwt);
  };

  const removeJwt = () => {
    setJwt("");
    localStorage.removeItem("jwt");
  };

  return (
    <AuthContext.Provider value={{ jwt, saveJwt }}>
      <Router>
        {
          // TODO
          // If jwt is not available or expired, go to login
          // jwt ? null : <Redirect to="/login" />
        }

        <Navbar>
          {
            // don't render logout if not logged in
            jwt ? (
              <>
                <Link className="navbar-brand" to="/">
                  Home
                </Link>
                <Link className="btn" to="/boards">
                  Boards
                </Link>
                <Link
                  className="btn btn-outline-danger my-2 my-sm-0"
                  to="/login"
                  onClick={removeJwt}
                >
                  logout
                </Link>
              </>
            ) : (
              <Link
                className="btn btn-outline-primary my-2 my-sm-0"
                to="/login"
                // onClick={removeJwt}
              >
                login
              </Link>
            )
          }
        </Navbar>

        {/* {isLoggedIn ? <Navbar />  : null} */}
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute
            redirectTo="/login"
            exact
            path="/board"
            component={Board}
          />
          <ProtectedRoute
            redirectTo="/login"
            exact
            path="/boards"
            component={Boards}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
