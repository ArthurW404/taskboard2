import React from "react";
// import { Button, Container } from "react-bootstrap";
import url from "../backend";
import useFetch from "../hooks/useFetch";

const SideBar = () => {
  const boards = useFetch(url + "/boards");
  const boardsView = boards
    ? boards.map((board) => <button>{board.name}</button>)
    : null;
  return <>{boardsView}</>;
};

export default SideBar;
