/**
 * Screen which appears after user successfully logs in
 */
import React, { useEffect, useState } from "react";
import BoardCard from "../components/BoardCard";

const getBoards = () => {
  // get dummy data for boards
  // most likely replace with network request from server
  const data = require("./getBoardsData.json");

  return data;
};

const Home = (props) => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    setBoards(getBoards());
  }, []);

  const boardsView = boards.map((board) => {
    return <BoardCard key={board.id} name={board.name} image={board.image} />;
  });

  return (
    <div>
      Home page
      {boardsView}
      <div></div>
    </div>
  );
};

export default Home;
