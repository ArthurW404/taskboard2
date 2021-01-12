/**
 * Screen after user selects a board
 */

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import url from "../backend";
import SideBar from "../components/SideBar";
import useFetch from "../hooks/useFetch";
const Board = (props) => {
  const data = useFetch(url + "/board", { method: "POST" });
  return (
    <Container>
      <Row>
        <Col>
          <SideBar />
        </Col>
        <Col>Content</Col>
      </Row>
    </Container>
  );
};

export default Board;
