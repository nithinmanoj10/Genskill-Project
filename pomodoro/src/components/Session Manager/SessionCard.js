import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function SessionCard(props) {
  const {
    id,
    isStarted,
    isFinised,
    title,
    task,
    currentInterval,
    intervals,
    description,
  } = props.session;

  const { sessionData, setSessionData } = props;

  const sessionDeleteHandle = function () {
    console.log(id);
    console.log(sessionData, setSessionData);

    const updatedSessionData = sessionData.filter(function (session) {
      if (id !== session.id) {
        return session;
      }
    });

    setSessionData([...updatedSessionData]);
    localStorage.setItem("sessionsData", JSON.stringify(updatedSessionData));
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
        <button className="session-card__actions__button">
          <KeyboardArrowRightIcon />
        </button>
      </div>
      <div className="session-card__status">
        <div className="session-card__status__stat">
          <p className="session-card__status__stat__name">Status: </p>
          {isFinised === true ? (
            <p className="session-card__status__stat__value session-card__status__stat__value--finished ">
              Finished
            </p>
          ) : isStarted === true ? (
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
