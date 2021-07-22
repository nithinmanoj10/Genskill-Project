import React, { Component } from "react";
import TaskNavBar from "./TaskNavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./Tasks";
import CompletedTasks from "./CompletedTasks";
import Tags from "../Tag Manager/Tags";

function TaskManager() {
  return (
    <div className="task-manager">
      {/* <TaskNavBar />
      <Tasks />
      <CompletedTasks />
      <Tags /> */}
      <h1>Hello World</h1>
    </div>
  );
}

export default TaskManager;
