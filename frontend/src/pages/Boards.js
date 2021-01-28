/**
 * Screen which appears after user successfully logs in
 */
import React, { useContext } from "react";
import BoardCard from "../components/BoardCard";
import url from "../backend";
import useFetch from "../hooks/useFetch";
// import { Button, Container } from "react-bootstrap";

import AuthContext from "../AuthContext";

const Home = (props) => {
  const jwt = useContext(AuthContext);
  // const [boards, setBoards] = useState([]);

  // useEffect(() => {
  //   fetch(url + "/getBoard")
  //     .then((resp) => resp.json())
  //     .then((data) => setBoards(data))
  //     .catch((err) => console.log("error: " + err));
  // }, []);
  const getBoardURL = new URL(url + "/boards");
  const params = { token: jwt.jwt };
  getBoardURL.search = new URLSearchParams(params).toString();

  const boards = useFetch(getBoardURL);

  const boardsView =
    boards &&
    boards.map((board) => {
      return <BoardCard key={board.id} name={board.name} image={board.image} />;
    });

  return (
    <>
      <h1>Boards page</h1>
      <section>{boardsView}</section>
      <button>Add board</button>
    </>
  );
};

export default Home;
