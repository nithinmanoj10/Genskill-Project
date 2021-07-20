import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import CreateTask from "./CreateTask";
import AddIcon from "@material-ui/icons/Add";
import TaskCard from "./TaskCard";

import { tasksData, updateTasksData } from "./Data/TasksData";

function Tasks() {
  const [tasks, setTasks] = useState([...tasksData]);

  const submitTaskHandle = function (Data) {
    updateTasksData(Data);
    setTasks([...Data]);
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
            if (task.task_isCompleted == false) {
              return (
                <TaskCard
                  key={task.task_id}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              );
            }
            return "";
          })}
        </ul>
      </div>
    </Router>
  );
}

export default Tasks;
