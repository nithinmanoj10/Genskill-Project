import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import CreateTask from "./CreateTask";
import AddIcon from "@material-ui/icons/Add";
import TaskCard from "./TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const submitTaskHandle = function (taskData) {
    console.log(taskData);
    setTasks([...taskData]);
  };

  return (
    <Router>
      <div className="task-section">
        <header className="task-section__header">
          <h2 className="heading">Tasks</h2>
          <Link to="/taskmanager/create-task" className="add-task">
            <h4>New Task</h4>
            <AddIcon className="add-task__icon" />
          </Link>
        </header>
        <Switch>
          <Route path="/taskmanager/create-task">
            <CreateTask submitTaskHandle={submitTaskHandle} tasks={tasks} />
          </Route>
        </Switch>
        <ul className="task-list">
          {tasks.map((task) => {
            console.log(task);
            return <TaskCard task={task} />;
          })}
        </ul>
      </div>
    </Router>
  );
}

export default Tasks;
