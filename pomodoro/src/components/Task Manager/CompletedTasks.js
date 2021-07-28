import React, { Component, useState } from "react";
import TaskCard from "./TaskCard";
import EmptyTasks from "./EmptyTasks";

import reverseArray from "../functions/reverseArray";

import RegularShowWork from "../../images/Mordecai-Rigby-working.png";

function CompletedTasks() {
  const tasksData = JSON.parse(localStorage.getItem("tasksData") || "[]");
  const [tasks, setTasks] = useState([...tasksData]);

  const completedTasks = tasksData.filter((task) => {
    if (task.task_isCompleted == true) {
      return task;
    }
  });

  return (
    <div className="task-section">
      <header className="task-section__header">
        <h2 className="heading">Completed Tasks</h2>
      </header>
      {completedTasks.length == 0 ? (
        <EmptyTasks
          image={RegularShowWork}
          text="You haven't completed any tasks. Now get back to work ;)"
          alt="Moredecai and Rigby Working"
          height={230}
        />
      ) : (
        <ul className="task-list">
          {reverseArray(completedTasks).map((task) => {
            return (
              <TaskCard
                key={task.task_id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CompletedTasks;
