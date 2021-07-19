import React from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TodayIcon from "@material-ui/icons/Today";

function TaskCard(props) {
  const { task_tag, task_title, task_desc, task_estimate } = props.task;

  return (
    <div className="task-card">
      <div className="task-info">
        <p className="task-info__tag">{task_tag}</p>
        <h4 className="task-info__name">{task_title}</h4>
        <p className="task-info__desc">{task_desc}</p>
      </div>
      <div className="task-card__actions">
        <button className="task-card__actions__button">
          <CheckCircleIcon className="task-icon task-icon--done" />
        </button>
        <button className="task-card__actions__button">
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
          <p className="time-stat__value">19th July</p>
        </div>
        <div className="time-stat">
          <p className="time-stat__name">End</p>
          <p className="time-stat__value">-</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
