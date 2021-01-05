// import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Board from "./pages/Board";
import ErrorPage from "./pages/ErrorPage";
import Boards from "./pages/Boards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const checkIsLoggedIn = () => {
  return false;
};

const Context = React.createContext();

function App() {
  console.log("Starting App");

  // const [screen, setScreen] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  // const switchToHome = () => {
  //   setScreen(<Home switchToBoard={switchToBoard} />);
  // };

  // const switchToLogin = () => {
  //   setScreen(
  //     <Login switchToHome={switchToHome} setIsLoggedIn={setIsLoggedIn} />
  //   );
  // };

  // const switchToBoard = useCallback(() => {
  //   console.log("switching to board");
  //   setScreen(<Board />);
  // }, []);

  useEffect(() => {
    let storage = window.localStorage;
    storage.getItem("");
  }, []);

  // const logout = () => {
  //   // switchToLogin();
  //   setIsLoggedIn(false);
  // };

  // useEffect(() => {
  //   // passing switchToHome function to login screen right after initial render
  //   switchToLogin();
  // }, []);

  return (
    <Context.Provider>
      <Router>
        {isLoggedIn ? <Navbar /> : null}
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
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

export default App;
