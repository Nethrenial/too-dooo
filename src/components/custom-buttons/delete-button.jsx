import React from "react";
import "./delete-button.scss";

const DeleteButton = (props) => {
  return (
    <button onClick={props.onDelete} className="delete">
      -
    </button>
  );
};

export default DeleteButton;
