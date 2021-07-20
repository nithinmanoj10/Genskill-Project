import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import { getDate } from "./Dates";

function CreateTask({ inputTextHandle, tasks, submitTaskHandle }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTag, setTaskTag] = useState("");
  const [taskEstimate, setTaskEstimate] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const taskNameHandle = function (e) {
    setTaskTitle(e.target.value);
  };

  const taskTagHandle = function (e) {
    console.log(e.target);
    setTaskTag(e.target.value);
  };

  const taskEstimateHandle = function (e) {
    setTaskEstimate(e.target.value);
  };

  const taskDescHandle = function (e) {
    setTaskDesc(e.target.value);
  };

  const taskSubmitHandle = function (e) {
    e.preventDefault();

    const obj = {};
    obj.task_title = taskTitle;
    obj.task_tag = taskTag;
    obj.task_estimate = taskEstimate;
    obj.task_desc = taskDesc;
    obj.task_isCompleted = false;
    obj.task_startDate = getDate();
    obj.task_endDate = "-";
    obj.task_id = Math.random() * 100;

    tasks.push(obj);
    submitTaskHandle(tasks);
  };

  return (
    <div className="task-create">
      <header className="task-create__header">
        <h4 className="task-create__heading">Create Task</h4>
        <Link to="/taskmanager">
          <CloseIcon className="close-icon" />
        </Link>
      </header>

      <form className="task-create__form">
        <label htmlFor="ttitle" className="task-create__form__label">
          Task Title
        </label>
        <input
          type="text"
          name="tasktitle"
          id="ttitle"
          placeholder="Your Task Title"
          className="input__text"
          onChange={taskNameHandle}
        />
        <label htmlFor="ttag" className="task-create__form__label">
          Tag
        </label>
        <select
          name="tasktag"
          id="ttag"
          className="task-create__form__select"
          onChange={taskTagHandle}
        >
          <option value="" selected disabled hidden></option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
        </select>
        <label htmlFor="testimate" className="task-create__form__label">
          Estimated Time to Complete
        </label>
        <input
          type="text"
          name="taskestimate"
          id="testimate"
          placeholder="Time in Minutes"
          className="input__text"
          onChange={taskEstimateHandle}
        />

        <label htmlFor="tdescription" className="task-create__form__label">
          Description
        </label>
        <textarea
          name="taskdescription"
          id="tdescription"
          cols="35"
          rows="4"
          placeholder="Description for your Task..."
          className="task-create__form__description"
          onChange={taskDescHandle}
        ></textarea>

        <button
          className="input__button"
          type="submit"
          onClick={taskSubmitHandle}
        >
          <Link to="/taskmanager/" class="input__button__link">
            <h4>Create Task</h4>
          </Link>
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
