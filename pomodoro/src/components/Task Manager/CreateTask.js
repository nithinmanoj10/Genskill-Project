import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import { getDate } from "./Dates";

import isNumeric from "../functions/isNumeric";

function CreateTask({ tasks, setCreateTask }) {
  const tagsData = JSON.parse(localStorage.getItem("tagsData") || "[]");
  const statsData = JSON.parse(localStorage.getItem("statsData") || "[]")[0];
  // console.log(statsData);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskTag, setTaskTag] = useState("");
  const [taskEstimate, setTaskEstimate] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskTagsData, setTaskTagsData] = useState([...tagsData]);
  const [errorMessage, setErrorMessage] = useState([]);

  const closeButtonHandle = function () {
    setCreateTask("");
  };

  // for form validation
  const [isValidForm, setIsValidForm] = useState(false);

  const taskNameHandle = function (e) {
    setTaskTitle(e.target.value);
  };

  const taskTagHandle = function (e) {
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

    let valid = true;
    const errors = [];
    setErrorMessage(errors);

    if (taskTitle === "") {
      errors.push("You need to enter a Task Name");
      valid = false;
    }
    if (taskTag === "") {
      errors.push("You need to choose a Tag");
      valid = false;
    }
    if (taskEstimate === "") {
      errors.push("Task Estimate should be a valid number");
      valid = false;
    }

    if (parseInt(taskEstimate) < 1) {
      errors.push("Task Estimate can't be less than 1");
      valid = false;
    }
    if (parseInt(taskEstimate) > 15) {
      errors.push("Task Estimate can't be more than 15 ;)");
      valid = false;
    }
    if (valid === true) {
      const obj = {};
      obj.task_title = taskTitle;
      obj.task_tag = taskTag;
      obj.task_intervals = 0;
      obj.task_estimate = taskEstimate;
      obj.task_desc = taskDesc;
      obj.task_isCompleted = false;
      obj.task_startDate = getDate();
      obj.task_endDate = "-";
      obj.task_id = Math.random() * 100;

      // storing the new task in localStorage
      tasks.push(obj);
      localStorage.setItem("tasksData", JSON.stringify(tasks));
      // submitTaskHandle(tasks);

      // updating stats in localStorage
      statsData.tasks.totalTasks += 1;
      const taskCompletion =
        statsData.tasks.completedTasks / statsData.tasks.totalTasks;
      statsData.tasks.taskCompletion = taskCompletion.toFixed(3);
      const updatedStatsData = [];
      updatedStatsData.push(statsData);
      localStorage.setItem("statsData", JSON.stringify(updatedStatsData));
      setCreateTask("");

      return;
    }

    setErrorMessage(errors);
  };

  return (
    <div className="task-create">
      <header className="task-create__header">
        <h4 className="task-create__heading">Create Task</h4>
        <a href="javascript:void(0)" onClick={closeButtonHandle}>
          <CloseIcon className="close-icon" />
        </a>
      </header>

      <ul className="errors">
        {errorMessage.map(function (error) {
          return <li className="errors__message">{error}</li>;
        })}
      </ul>

      <form className="task-create__form">
        <label htmlFor="ttitle" className="task-create__form__label">
          Task Title <span className="important-asterisk">*</span>
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
          Tag <span className="important-asterisk">*</span>
        </label>
        <select
          name="tasktag"
          id="ttag"
          className="task-create__form__select"
          onChange={taskTagHandle}
        >
          <option value="" selected disabled hidden></option>

          {taskTagsData.length === 0 ? (
            <option disabled>Make some Tags</option>
          ) : (
            taskTagsData.map(function (tag) {
              return (
                <option value={`${tag.name}`} id={tag.id}>
                  {tag.name}
                </option>
              );
            })
          )}
        </select>
        <label htmlFor="testimate" className="task-create__form__label">
          Estimated Intervals to Complete{" "}
          <span className="important-asterisk">*</span>
        </label>
        <input
          type="number"
          name="taskestimate"
          id="testimate"
          placeholder="Intervals"
          className="input__number"
          onChange={taskEstimateHandle}
        />

        <label htmlFor="tdescription" className="task-create__form__label">
          Description
        </label>
        <textarea
          name="taskdescription"
          id="tdescription"
          cols="30"
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
          <a
            href="javascript:void(0)"
            class="input__button__link"
            // onClick={submitTaskHandle}
          >
            <h4>Create Task</h4>
          </a>
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
