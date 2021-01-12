import React from "react";
import { Button, Container } from "react-bootstrap";
import url from "../backend";
import useFetch from "../hooks/useFetch";

const SideBar = () => {
  const boards = useFetch(url + "/boards");
  const boardsView = boards
    ? boards.map((board) => <Button>{board.name}</Button>)
    : null;
  return <Container>{boardsView}</Container>;
};

export default SideBar;
