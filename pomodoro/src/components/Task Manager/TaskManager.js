import React, { Component } from "react";
import TaskNavBar from "./TaskNavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./Tasks";
import CompletedTasks from "./CompletedTasks";
import Tags from "../Tag Manager/Tags";

function TaskManager() {
  return (
    <Router>
      <div className="task-manager">
        <TaskNavBar />
        <Switch>
          <Route path="/Genskill-Project/taskmanager/" exact>
            <Tasks />
          </Route>
          <Route path="/Genskill-Project/taskmanager/completed">
            <CompletedTasks />
          </Route>
          <Route path="/Genskill-Project/taskmanager/tags">
            <Tags />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default TaskManager;
