import React, { Component, useState } from "react";
import TaskCard from "./TaskCard";

import { tasksData, updateTasksData } from "./Data/TasksData";

function CompletedTasks() {
  const [tasks, setTasks] = useState([...tasksData]);

  return (
    <div className="task-section">
      <header className="task-section__header">
        <h2 className="heading">Completed Tasks</h2>
      </header>
      <ul className="task-list">
        {tasks.map((task) => {
          if (task.task_isCompleted == true) {
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
  );
}

export default CompletedTasks;
