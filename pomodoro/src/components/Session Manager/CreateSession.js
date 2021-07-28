import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";

function CreateSession({ sessionData, setSessionData, setCreateSession }) {
  // statsData from localStorage
  const statsData = JSON.parse(localStorage.getItem("statsData") || "[]")[0];

  const tasksData = JSON.parse(
    localStorage.getItem("tasksData") || "[]"
  ).filter(function (task) {
    if (task.task_isCompleted === false) {
      return task;
    }
  });

  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionActiveTime, setSessionActiveTime] = useState("25");
  const [sessionShortBreak, setSessionShortBreak] = useState("5");
  const [sessionLongBreak, setSessionLongBreak] = useState("30");
  const [sessionTask, setSessionTask] = useState("");
  const [sessionInterval, setSessionInterval] = useState("4");
  const [sessionDescription, setSessionDescription] = useState("");
  const [sessionTag, setSessionTag] = useState("");
  const [sessionTaskId, setSessionTaskId] = useState("");

  const [errorMessage, setErrorMessage] = useState([]);

  const closeButtonHandle = function () {
    setCreateSession("");
  };

  const sessionTitleHandle = function (e) {
    setSessionTitle(e.target.value);
  };
  const sessionActiveTimeHandle = function (e) {
    setSessionActiveTime(e.target.value);
  };
  const sessionShortBreakHandle = function (e) {
    setSessionShortBreak(e.target.value);
  };
  const sessionLongBreakHandle = function (e) {
    setSessionLongBreak(e.target.value);
  };
  const sessionTaskHandle = function (e) {
    setSessionTask(e.target.value);
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var id = optionElement.getAttribute("id");

    tasksData.forEach(function (task) {
      if (task.task_id == id) {
        setSessionTag(task.task_tag);
        setSessionTaskId(task.task_id);
      }
    });
  };
  const sessionIntervalsHandle = function (e) {
    setSessionInterval(e.target.value);
  };
  const sessionDescriptionHandle = function (e) {
    setSessionDescription(e.target.value);
  };

  const sessionSubmitHandle = function (e) {
    e.preventDefault();

    let valid = true;
    const errors = [];
    setErrorMessage(errors);

    // checking for form errors
    if (sessionTitle === "") {
      errors.push("You need to enter a Session Name");
      valid = false;
    }
    if (sessionActiveTime === "") {
      errors.push("Active Time should be a valid number");
      valid = false;
    }
    if (parseInt(sessionActiveTime) < 1) {
      errors.push("Active Time can't be less than 1 min");
      valid = false;
    }
    if (parseInt(sessionActiveTime) > 120) {
      errors.push("Active Time can't be more than 120 mins ;)");
      valid = false;
    }

    if (sessionShortBreak === "") {
      errors.push("Short Break should be a valid number");
      valid = false;
    }
    if (parseInt(sessionShortBreak) < 1) {
      errors.push("Short Break can't be less than 1 min");
      valid = false;
    }
    if (parseInt(sessionShortBreak) > 60) {
      errors.push("Short Break can't be more than 60 mins");
      valid = false;
    }

    if (sessionLongBreak === "") {
      errors.push("Long Break should be a valid number");
      valid = false;
    }
    if (parseInt(sessionLongBreak) < 1) {
      errors.push("Long Break can't be less than 1 min");
      valid = false;
    }
    if (parseInt(sessionLongBreak) > 120) {
      errors.push("Long Break can't be more than 120 mins");
      valid = false;
    }

    if (sessionTask === "") {
      errors.push("You need to choose a Task");
      valid = false;
    }

    if (sessionInterval === "") {
      errors.push("Session Interval should be a valid number");
      valid = false;
    }

    if (parseInt(sessionInterval) < 1) {
      errors.push("Session Interval can't be less than 1");
      valid = false;
    }
    if (parseInt(sessionInterval) > 15) {
      errors.push("Session Interval can't be more than 15 ;)");
      valid = false;
    }

    if (valid === true) {
      const sessionInfo = {};
      sessionInfo.id = Math.random() * 100;
      sessionInfo.title = sessionTitle;
      sessionInfo.activeTime = sessionActiveTime;
      sessionInfo.shortBreak = sessionShortBreak;
      sessionInfo.longBreak = sessionLongBreak;
      sessionInfo.task = sessionTask;
      sessionInfo.intervals = sessionInterval;
      sessionInfo.description = sessionDescription;
      sessionInfo.tag = sessionTag;
      sessionInfo.taskId = sessionTaskId;
      sessionInfo.isStarted = false;
      sessionInfo.isFinished = false;
      sessionInfo.currentInterval = 0;

      sessionData.push(sessionInfo);
      setSessionData([...sessionData]);
      localStorage.setItem("sessionsData", JSON.stringify(sessionData));

      // update statsData for session in localStorage
      statsData.sessions.totalSession += 1;
      statsData.sessions.totalIntervals += Number(sessionInfo.intervals);
      const avgIntervals =
        statsData.sessions.totalIntervals / statsData.sessions.totalSession;
      statsData.sessions.avgIntervals = avgIntervals.toFixed(1);

      const updatedStatsData = [];
      updatedStatsData.push(statsData);
      localStorage.setItem("statsData", JSON.stringify(updatedStatsData));
      setCreateSession("");

      return;
    }

    setErrorMessage(errors);
  };

  return (
    <div className="task-create">
      <header className="session-create__header">
        <h4 className="session-create__heading">Create Session</h4>
        <a href="javascript:void(0)" onClick={closeButtonHandle}>
          <CloseIcon className="close-icon" />
        </a>
      </header>

      <ul className="errors">
        {errorMessage.map(function (error) {
          return <li className="errors__message">{error}</li>;
        })}
      </ul>

      <form className="session-create__form">
        <label htmlFor="stitle" className="session-create__form__label">
          Session Title <span className="important-asterisk">*</span>
        </label>
        <input
          type="text"
          name="sessiontitle"
          id="stitle"
          placeholder="Your Session Title"
          className="input__text"
          onChange={sessionTitleHandle}
        />

        <label htmlFor="sstudytime" className="session-create__form__label">
          Active Time <span className="light-italic">(in minutes)</span>{" "}
          <span className="important-asterisk">*</span>
        </label>
        <input
          type="number"
          name="SessionStudyTime"
          id="sstudytime"
          className="input__number"
          onChange={sessionActiveTimeHandle}
          defaultValue="25"
          min="10"
          max="120"
        />

        <label
          htmlFor="sshortbreaktime"
          className="session-create__form__label"
        >
          Short Break Time <span className="light-italic">(in minutes)</span>{" "}
          <span className="important-asterisk">*</span>
        </label>

        <input
          type="number"
          name="SessionShortBreakTime"
          id="sshortbreaktime"
          className="input__number"
          onChange={sessionShortBreakHandle}
          defaultValue="5"
          min="5"
          max="20"
        />

        <label htmlFor="slongbreaktime" className="session-create__form__label">
          Long Break Time <span className="light-italic">(in minutes)</span>{" "}
          <span className="important-asterisk">*</span>
        </label>

        <input
          type="number"
          name="SessionLongBreakTime"
          id="slongbreaktime"
          className="input__number"
          onChange={sessionLongBreakHandle}
          defaultValue="30"
          min="20"
          max="60"
        />

        <label htmlFor="stask" className="session-create__form__label">
          Task <span className="important-asterisk">*</span>
        </label>
        <select
          name="sessiontask"
          id="stask"
          className="session-create__form__select"
          onChange={sessionTaskHandle}
        >
          <option value="" selected disabled hidden></option>

          {tasksData.length === 0 ? (
            <option disabled>Create some Tasks</option>
          ) : (
            tasksData.map(function (tasks) {
              return (
                <option value={`${tasks.task_title}`} id={tasks.task_id}>
                  {tasks.task_title}
                </option>
              );
            })
          )}
        </select>
        <label htmlFor="sintervals" className="session-create__form__label">
          Number of Intervals <span className="important-asterisk">*</span>
        </label>
        <input
          type="number"
          name="sessionintervals"
          id="sintervals"
          className="input__number"
          onChange={sessionIntervalsHandle}
          defaultValue="4"
          min="1"
          max="12"
        />

        <label htmlFor="tdescription" className="session-create__form__label">
          Description
        </label>
        <textarea
          name="sessiondescription"
          id="tdescription"
          cols="30"
          rows="4"
          placeholder="Description for your Session..."
          className="session-create__form__description"
          onChange={sessionDescriptionHandle}
        ></textarea>

        <button
          className="input__button"
          type="submit"
          onClick={sessionSubmitHandle}
        >
          <a href="javascript:void(0)" class="input__button__link">
            <h4>Create Session</h4>
          </a>
        </button>
      </form>
    </div>
  );
}

export default CreateSession;
