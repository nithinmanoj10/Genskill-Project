import React from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TodayIcon from "@material-ui/icons/Today";

import { tasksData, updateTasksData } from "./Data/TasksData";
import { getDate } from "./Dates";

function TaskCard(props) {
  const {
    task_tag,
    task_title,
    task_desc,
    task_estimate,
    task_id,
    task_startDate,
    task_endDate,
    task_isCompleted,
  } = props.task;
  const { tasks, setTasks } = props;

  const deleteHandle = function () {
    console.log(props);
    console.log(tasks, setTasks);

    const newTasks = tasks.filter((task) => task_id !== task.task_id);
    updateTasksData(newTasks);
    setTasks([...newTasks]);
  };

  const completeHandle = function () {
    const updatedTasks = tasks.map(function (task) {
      if (task_id === task.task_id) {
        task.task_isCompleted = true;
        task.task_endDate = getDate();
      }
      return task;
    });
    setTasks([...updatedTasks]);
  };

  return (
    <div
      className={`task-card ${
        task_isCompleted === true ? "task-card--completed" : ""
      }`}
    >
      <div className="task-info">
        <p className="task-info__tag">{task_tag}</p>
        <h4 className="task-info__name">{task_title}</h4>
        <p className="task-info__desc">{task_desc}</p>
      </div>
      <div className="task-card__actions">
        <button className="task-card__actions__button" onClick={completeHandle}>
          <CheckCircleIcon className="task-icon task-icon--done" />
        </button>
        <button className="task-card__actions__button" onClick={deleteHandle}>
          <DeleteIcon className="task-icon task-icon--delete" />
        </button>
      </div>
      <div className="task-card__time">
        <ScheduleIcon className="task-icon--time" />
        <div className="time-stat">
          <p className="time-stat__name">Estimated Time</p>
          <p className="time-stat__value">{task_estimate} mins</p>
        </div>
        <TodayIcon className="task-icon--time" />
        <div className="time-stat">
          <p className="time-stat__name">Start</p>
          <p className="time-stat__value">{task_startDate}</p>
        </div>
        <div className="time-stat">
          <p className="time-stat__name">End</p>
          <p className="time-stat__value">{task_endDate}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
