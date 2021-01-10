/**
 * Screen after user selects a board
 */

import React from "react";
import url from "../backend";
import SideBar from "../components/SideBar";
import useFetch from "../hooks/useFetch";
const Board = (props) => {
  const data = useFetch(url + "/board", { method: "POST" });
  return (
    <>
      <SideBar />
    </>
  );
};

export default Board;
