import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function SessionCard(props) {
  const statsData = JSON.parse(localStorage.getItem("statsData") || "[]")[0];

  const {
    id,
    activeTime,
    shortBreak,
    longBreak,
    isStarted,
    isFinished,
    title,
    task,
    currentInterval,
    intervals,
    description,
  } = props.session;

  const [sessionIsStarted, setSessionIsStarted] = useState(
    props.session.isStarted
  );

  const { sessionData, setSessionData } = props;

  // to get the details of the current session
  const { currentSession, setCurrentSession } = props;

  const sessionDeleteHandle = function () {
    const updatedSessionData = sessionData.filter(function (session) {
      if (id !== session.id) {
        return session;
      }
    });

    setSessionData([...updatedSessionData]);
    localStorage.setItem("sessionsData", JSON.stringify(updatedSessionData));
  };

  const gotoSessionHandle = function () {
    setSessionIsStarted(true);

    // need to update sessionIsStarted
    // updates that data in the local storage as well
    const updatedSessionData = sessionData.filter(function (session) {
      if (id === session.id) {
        session.isStarted = true;
      }
      return session;
    });

    setSessionData([...updatedSessionData]);
    localStorage.setItem("sessionsData", JSON.stringify(updatedSessionData));

    setCurrentSession(props.session);
  };

  return (
    <div className="session-card">
      <div className="session-card__info">
        <h4 className="session-card__info__name">{title}</h4>
        <p className="session-card__info__task">{task}</p>
        <p className="session-card__info__description">{description}</p>
      </div>
      <div className="session-card__actions">
        <button
          className="session-card__actions__button"
          onClick={sessionDeleteHandle}
        >
          <DeleteIcon />
        </button>

        {isFinished === false ? (
          <Link to="/pomodoro/timer">
            <button
              className="session-card__actions__button"
              onClick={gotoSessionHandle}
            >
              <KeyboardArrowRightIcon />
            </button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="session-card__status">
        <div className="session-card__status__stat">
          <p className="session-card__status__stat__name">Status: </p>
          {isFinished === true ? (
            <p className="session-card__status__stat__value session-card__status__stat__value--finished ">
              Finished
            </p>
          ) : sessionIsStarted === true ? (
            <p className="session-card__status__stat__value session-card__status__stat__value--started ">
              Started
            </p>
          ) : (
            <p className="session-card__status__stat__value">Not Started</p>
          )}
        </div>
        <div className="session-card__status__stat">
          <p className="session-card__status__stat__name">Progress:</p>
          <p className="session-card__status__stat__value">
            {currentInterval}/{intervals}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
