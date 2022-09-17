import React from "react";
import "./Sidebar.css";
import { Data } from "../Data";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        {Data.map((value, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = value.link;
              }}
              className="row"
              id={window.location.pathname == value.link ? "active" : ""}
            >
              <div className="icon">{value.icon}</div>
              <div className="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
