import React, { Component, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import reverseArray from "../functions/reverseArray";

import CreateTask from "./CreateTask";
import AddIcon from "@material-ui/icons/Add";
import TaskCard from "./TaskCard";
import EmptyTasks from "./EmptyTasks";

import RegularShowEnjoy from "../../images/Mordecai-Rigby-enjoying.png";

function Tasks() {
  const tasksData = JSON.parse(localStorage.getItem("tasksData") || "[]");
  const [tasks, setTasks] = useState([...tasksData]);
  const [createTask, setCreateTask] = useState("");

  const pendingTasks = tasksData.filter((task) => {
    if (task.task_isCompleted == false) {
      return task;
    }
  });

  const renderCreateTask = function () {
    setCreateTask(<CreateTask tasks={tasks} setCreateTask={setCreateTask} />);
  };

  return (
    <Router>
      <div className="task-section">
        <header className="task-section__header">
          <h2 className="heading">Tasks</h2>
          <a
            href="javascript:void(0)"
            className="add-task"
            onClick={renderCreateTask}
          >
            <h4>New Task</h4>
            <AddIcon className="add-task__icon" />
          </a>
        </header>

        {createTask}

        {pendingTasks.length == 0 ? (
          <EmptyTasks
            image={RegularShowEnjoy}
            text="You have no tasks for now. Go and have some fun :)"
            alt="Moredecai and Rigby enjoying"
            height={280}
          />
        ) : (
          <ul className="task-list">
            {reverseArray(tasks).map((task) => {
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
