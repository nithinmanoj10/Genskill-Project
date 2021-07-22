import React, { Component } from "react";
import TaskNavBar from "./TaskNavBar";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./Tasks";
import CompletedTasks from "./CompletedTasks";
import Tags from "../Tag Manager/Tags";

function TaskManager() {
  return (
    <Router>
      <div className="task-manager">
        <TaskNavBar />
        <Switch>
          <Route path="/task-manager/tasks" component={Tasks} />
          <Route
            path="/task-manager/completed-tasks"
            component={CompletedTasks}
          />
          <Route path="/task-manager/tags" component={Tags} />
        </Switch>
      </div>
    </Router>
  );
}

export default TaskManager;
