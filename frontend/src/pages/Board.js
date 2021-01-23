/**
 * Screen after user selects a board
 */

import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import url from "../backend";
import SideBar from "../components/SideBar";
import useFetch from "../hooks/useFetch";
const Board = (props) => {
  const data = useFetch(url + "/board", { method: "POST" });
  useEffect(() => {
    console.log(data);
  }, [data]);
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
