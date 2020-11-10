import React from "react";
import "./note-list.scss";
import DeleteButton from "../../custom-buttons/delete-button";

const NoteList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li>
          <p>{task}</p>
          <DeleteButton onDelete={(e) => props.onDelete(e)}></DeleteButton>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
