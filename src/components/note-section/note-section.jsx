import React, { Component } from "react";
import "./note-section.scss";
import NoteList from "./note-list/note-list";
import AddButton from "../custom-buttons/add-button";
import NewTaskInput from "../custom-inputs/new-task/new-task";

class NoteSection extends Component {
  constructor() {
    super();

    if (
      JSON.parse(localStorage.getItem("tasks")) !== null &&
      localStorage.getItem("num") !== null
    ) {
      this.state = {
        tasks: JSON.parse(localStorage.getItem("tasks")),
        new_task: "",
        num_of_tasks: Number(localStorage.getItem("num")),
      };
    } else {
      this.state = {
        tasks: [],
        new_task: "",
        num_of_tasks: 0,
      };
    }
  }

  handleChange = (event) => {
    this.setState({
      new_task: event.target.value,
    });
  };

  handleClick = () => {
    if (this.state.new_task !== "") {
      const tasks = [...this.state.tasks];
      tasks.push(this.state.new_task);

      this.setState(
        {
          num_of_tasks: this.state.num_of_tasks + 1,
        },
        () => {
          localStorage.setItem("num", this.state.num_of_tasks.toString());
        }
      );

      this.setState(
        {
          tasks,
          new_task: "",
        },
        () => {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }
      );
    }
  };

  deleteSingleEntry = (event) => {
    const item = event.target.parentNode.firstElementChild.innerText;
    const array = [...this.state.tasks];
    const index = array.indexOf(item);
    this.setState(
      {
        tasks: this.state.tasks.filter((_, i) => i !== index),
        num_of_tasks: this.state.num_of_tasks - 1,
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        localStorage.setItem("num", this.state.num_of_tasks.toString());
      }
    );
  };

  onDelete = () => {
    var popup = document.getElementById("popup");
    popup.classList.remove("pop-up-hidden");
    popup.classList.add("pop-up-visible");
  };

  confirmDelete = () => {
    this.setState(
      {
        tasks: [],
        num_of_tasks: 0,
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        localStorage.setItem("num", this.state.num_of_tasks.toString());
        document.getElementById("popup").classList.remove("pop-up-visible");
        document.getElementById("popup").classList.add("pop-up-hidden");
      }
    );
  };

  cancelDelete = () => {
    document.getElementById("popup").classList.remove("pop-up-visible");
    document.getElementById("popup").classList.add("pop-up-hidden");
  };

  render() {
    return (
      <div className="container">
        <h2>
          {this.state.num_of_tasks === 0
            ? "Congrats, You have no pending tasks!"
            : this.state.num_of_tasks === 1
            ? "You have one task to complete."
            : `You have ${this.state.num_of_tasks} tasks to complete.`}
        </h2>
        <div className="add-container">
          <NewTaskInput
            value={this.state.new_task}
            onChange={(e) => this.handleChange(e)}
          ></NewTaskInput>
          <AddButton onClick={this.handleClick}></AddButton>
          <button onClick={this.onDelete}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <NoteList
          tasks={this.state.tasks}
          onDelete={(e) => this.deleteSingleEntry(e)}
        ></NoteList>
        <div className="pop-up-hidden" id="popup">
          <p>
            {" "}
            <i className="fas fa-exclamation-triangle"></i> Are you sure you
            want to delete all tasks ?
          </p>
          <button onClick={this.confirmDelete}>
            <i className="fas fa-check"></i>
          </button>
          <button onClick={this.cancelDelete}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default NoteSection;
