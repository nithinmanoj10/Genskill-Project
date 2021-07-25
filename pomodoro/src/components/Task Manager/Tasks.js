import React, { Component, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import CreateTask from "./CreateTask";
import AddIcon from "@material-ui/icons/Add";
import TaskCard from "./TaskCard";
import EmptyTasks from "./EmptyTasks";

import RegularShowEnjoy from "../../images/Mordecai-Rigby-enjoying.png";
import CreateTag from "../Tag Manager/CreateTag";

function Tasks() {
  const tasksData = JSON.parse(localStorage.getItem("tasksData") || "[]");
  const [tasks, setTasks] = useState([...tasksData]);

  const pendingTasks = tasksData.filter((task) => {
    if (task.task_isCompleted == false) {
      return task;
    }
  });

  const submitTaskHandle = function (Data) {
    setTasks([...Data]);
  };

  return (
    <Router>
      <div className="task-section">
        <header className="task-section__header">
          <h2 className="heading">Tasks</h2>
          <Link to="/task-manager/tasks/create-task" className="add-task">
            <h4>New Task</h4>
            <AddIcon className="add-task__icon" />
          </Link>
        </header>

        <Switch>
          <Route path="/task-manager/tasks/create-task">
            <CreateTask submitTaskHandle={submitTaskHandle} tasks={tasks} />
          </Route>
        </Switch>

        {pendingTasks.length == 0 ? (
          <EmptyTasks
            image={RegularShowEnjoy}
            text="You have no tasks for now. Go and have some fun :)"
            alt="Moredecai and Rigby enjoying"
            height={280}
          />
        ) : (
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
        )}
      </div>
    </Router>
  );
}

export default Tasks;
