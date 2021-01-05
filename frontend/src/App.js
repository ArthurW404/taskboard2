// import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState, useCallback } from "react";

const checkIsLoggedIn = () => {
  return false;
};

function App() {
  console.log("Starting App");

  const [screen, setScreen] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  const switchToHome = () => {
    setScreen(<Home switchToBoard={switchToBoard} />);
  };

  const switchToLogin = () => {
    setScreen(
      <Login switchToHome={switchToHome} setIsLoggedIn={setIsLoggedIn} />
    );
  };

  const switchToBoard = useCallback(() => {
    console.log("switching to board");
    setScreen(<Board />);
  }, []);

  const logout = () => {
    switchToLogin();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // passing switchToHome function to login screen right after initial render
    switchToLogin();
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Navbar switchToHome={switchToHome} logout={logout} />
      ) : null}
      {screen}
      <Footer />
    </div>
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
