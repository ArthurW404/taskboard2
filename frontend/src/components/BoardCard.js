import React from "react";
import { Link } from "react-router-dom";

const BoardCard = (props) => {
  console.log("loading card");

  // const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link
      // onMouseEnter={() => setIsMouseOver(true)}
      // onMouseLeave={() => setIsMouseOver(false)}
      style={{ width: "50%" }}
      to="/board"
    >
      <img src={props.image} alt="..." />
      <div>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

// const image = {
//   height: "20%",
//   maxHeight: 400,
//   width: "20%",
//   maxWidth: 400,
// };

export default BoardCard;
