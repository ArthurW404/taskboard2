/**
 * Screen which appears after user successfully logs in
 */
import React, { useEffect, useState } from "react";
import BoardCard from "../components/BoardCard";
import url from "../backend";
import useFetch from "../hooks/useFetch";

const Home = (props) => {
  // const [boards, setBoards] = useState([]);

  // useEffect(() => {
  //   fetch(url + "/getBoard")
  //     .then((resp) => resp.json())
  //     .then((data) => setBoards(data))
  //     .catch((err) => console.log("error: " + err));
  // }, []);

  const boards = useFetch(url + "/boards");

  const boardsView =
    boards &&
    boards.map((board) => {
      return <BoardCard key={board.id} name={board.name} image={board.image} />;
    });

  return (
    <>
      Boards page
      {boardsView}
      <div></div>
    </>
  );
};

export default Home;
