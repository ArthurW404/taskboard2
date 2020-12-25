import React, { useState } from "react";
import constants from "../constants";

const BoardCard = (props) => {
  console.log("loading card");

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className="card"
      style={{ backgroundColor: isMouseOver ? constants.hoverColor : "white" }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={props.switchToBoard}
    >
      <img src={props.image} className="card-img-top" alt="..." style={image} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
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
