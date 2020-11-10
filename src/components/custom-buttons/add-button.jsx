import React from "react";
import "./add-button.scss";

const AddButton = (props) => {
  return <button onClick={props.onClick}>+</button>;
};

export default AddButton;
