/**
 * Screen which appears after user successfully logs in
 */
import React, { useEffect, useState } from "react";
import BoardCard from "../components/BoardCard";

const url = "http://localhost:5000";

const Home = (props) => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch(url + "/getBoard")
      .then((resp) => resp.json())
      .then((data) => setBoards(data))
      .catch((err) => console.log("error: " + err));
  }, []);

  const boardsView = boards.map((board) => {
    return (
      <BoardCard
        key={board.id}
        name={board.name}
        image={board.image}
        switchToBoard={props.switchToBoard}
      />
    );
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
