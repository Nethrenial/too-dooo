import React from "react";
import "./new-task.scss";

const NewTaskInput = (props) => {
  return (
    <input
      type="text"
      name="task"
      id="task"
      placeholder="Add new task!"
      value={props.value}
      onChange={(e) => props.onChange(e)}
      required
    />
  );
};

export default NewTaskInput;
