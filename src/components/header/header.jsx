import React from "react";
import "./header.scss";
import pencil from "../../assets/pencil.png";

const Header = () => {
  return (
    <div className="header">
      <img src={pencil} alt="" />
      <header>
        <h1>TooDooo</h1>
        <p>This is an interactive To Do List!</p>
      </header>
    </div>
  );
};

export default Header;
