import React, { Component } from "react";
import CreateTask from "./CreateTask";

export default class Tasks extends Component {
  render() {
    return (
      <div className="task-section">
        <h2 className="heading">Tasks</h2>
        <CreateTask />
      </div>
    );
  }
}
