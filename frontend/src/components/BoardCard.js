import React from "react";

const BoardCard = (props) => {
  console.log("loading card");
  return (
    <div className="card">
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        style={styles.image}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: "20%",
    maxHeight: 400,
    width: "20%",
    maxWidth: 400,
  },
};

export default BoardCard;
