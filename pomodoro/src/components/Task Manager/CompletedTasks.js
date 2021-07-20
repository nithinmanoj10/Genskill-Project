import React, { Component, useState } from "react";
import TaskCard from "./TaskCard";
import EmptyTasks from "./EmptyTasks";

import RegularShowWork from "../../images/Mordecai-Rigby-working.png";

function CompletedTasks() {
  const tasksData = JSON.parse(localStorage.getItem("tasksData") || "[]");
  const [tasks, setTasks] = useState([...tasksData]);

  return (
    <div className="task-section">
      <header className="task-section__header">
        <h2 className="heading">Completed Tasks</h2>
      </header>
      {tasksData.length == 0 ? (
        <EmptyTasks
          image={RegularShowWork}
          text="You haven't completed any tasks. Now get back to work ;)"
          alt="Moredecai and Rigby Working"
        />
      ) : (
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
      )}
    </div>
  );
}

export default CompletedTasks;
