import React, { useState } from "react";
import { Link } from "react-router-dom";
import constants from "../constants";

const BoardCard = (props) => {
  console.log("loading card");

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link
      className="card"
      style={{ backgroundColor: isMouseOver ? constants.hoverColor : "white" }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      to="/board"
    >
      <img src={props.image} className="card-img-top" alt="..." style={image} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </Link>
  );
};

const image = {
  height: "20%",
  maxHeight: 400,
  width: "20%",
  maxWidth: 400,
};

const card = {};
export default BoardCard;
