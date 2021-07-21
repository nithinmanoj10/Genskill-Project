import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";

function CreateSession() {
  const tasksData = JSON.parse(
    localStorage.getItem("tasksData") || "[]"
  ).filter(function (task) {
    if (task.task_isCompleted === false) {
      return task;
    }
  });

  const sessionInfo = {
    isStarted: false,
    isFinished: false,
  };

  const sessionTitleHandle = function (e) {
    sessionInfo.title = e.target.value;
  };
  const sessionActiveTimeHandle = function (e) {
    sessionInfo.activeTime = e.target.value;
  };
  const sessionShortBreakHandle = function (e) {
    sessionInfo.shortBreak = e.target.value;
  };
  const sessionLongBreakHandle = function (e) {
    sessionInfo.longBreak = e.target.value;
  };
  const sessionTaskHandle = function (e) {
    sessionInfo.task = e.target.value;
  };
  const sessionIntervalsHandle = function (e) {
    sessionInfo.intervals = e.target.value;
  };
  const sessionDescriptionHandle = function (e) {
    sessionInfo.description = e.target.value;
  };

  const sessionSubmitHandle = function () {
    console.log(sessionInfo);
  };

  useEffect(() => {
    alert("Hello");

    return () => {
      const sessionsData = JSON.parse(
        localStorage.getItem("sessionsData") || "[]"
      );
      sessionsData.push(sessionInfo);
      localStorage.setItem("sessionsData", JSON.stringify(sessionsData));
    };
  }, []);

  return (
    <div className="task-create">
      <header className="session-create__header">
        <h4 className="session-create__heading">Create Session</h4>
        <Link to="/Session-Manager">
          <CloseIcon className="close-icon" />
        </Link>
      </header>

      <form className="session-create__form">
        <label htmlFor="stitle" className="session-create__form__label">
          Session Title
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
          Active Time <span className="light-italic">(in minutes)</span>
        </label>
        <input
          type="number"
          name="SessionStudyTime"
          id="sstudytime"
          className="input__number"
          onChange={sessionActiveTimeHandle}
        />

        <label
          htmlFor="sshortbreaktime"
          className="session-create__form__label"
        >
          Short Break Time <span className="light-italic">(in minutes)</span>
        </label>

        <input
          type="number"
          name="SessionShortBreakTime"
          id="sshortbreaktime"
          className="input__number"
          onChange={sessionShortBreakHandle}
        />

        <label htmlFor="slongbreaktime" className="session-create__form__label">
          Long Break Time <span className="light-italic">(in minutes)</span>
        </label>

        <input
          type="number"
          name="SessionLongBreakTime"
          id="slongbreaktime"
          className="input__number"
          onChange={sessionLongBreakHandle}
        />

        <label htmlFor="stask" className="session-create__form__label">
          Task
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
          Number of Intervals
        </label>
        <input
          type="text"
          name="sessionintervals"
          id="sintervals"
          placeholder="Number of Intervals"
          className="input__text"
          onChange={sessionIntervalsHandle}
        />

        <label htmlFor="tdescription" className="session-create__form__label">
          Description
        </label>
        <textarea
          name="sessiondescription"
          id="tdescription"
          cols="35"
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
          <Link to="/sessionmanager/" class="input__button__link">
            <h4>Create Session</h4>
          </Link>
        </button>
      </form>
    </div>
  );
}

export default CreateSession;
