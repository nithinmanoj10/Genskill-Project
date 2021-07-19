import React, { Component } from "react";
import TaskNavBar from "./TaskNavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./Tasks";
import CompletedTasks from "./CompletedTasks";
import Tags from "./Tags";

export default class TaskManager extends Component {
  render() {
    return (
      <Router>
        <div className="task-manager">
          <TaskNavBar />
          <Switch>
            <Route path="/taskmanager/" exact component={Tasks} />
            <Route path="/taskmanager/completed" component={CompletedTasks} />
            <Route path="/taskmanager/tags" component={Tags} />
          </Switch>
        </div>
      </Router>
    );
  }
}
