import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import reverseArray from "../functions/reverseArray";

import AddIcon from "@material-ui/icons/Add";
import CreateSession from "./CreateSession";
import SessionCard from "./SessionCard";
import EmptyTasks from "../Task Manager/EmptyTasks";

import RegularShowReading from "../../images/Rigby-reading.png";

function SessionManager({ currentSession, setCurrentSession }) {
  let [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    setSessionData([
      ...JSON.parse(localStorage.getItem("sessionsData") || "[]"),
    ]);
  }, []);

  const [createSession, setCreateSession] = useState("");

  const renderCreateSession = function () {
    setCreateSession(
      <CreateSession
        sessionData={sessionData}
        setSessionData={setSessionData}
        setCreateSession={setCreateSession}
      />
    );
  };

  return (
    <Router>
      <div className="task-manager">
        <div className="task-section">
          <header className="task-section__header">
            <h2 className="heading">Sessions</h2>
            <a
              href="javascript:void(0)"
              className="add-task"
              onClick={renderCreateSession}
            >
              <h4>New Session</h4>
              <AddIcon className="add-task__icon" />
            </a>
          </header>

          {createSession}

          {sessionData.length === 0 ? (
            <EmptyTasks
              image={RegularShowReading}
              text="Create a session and let's get productive :D"
              alt="Rigby Reading"
              height={300}
            />
          ) : (
            <ul class="task-list">
              {reverseArray(sessionData).map(function (session) {
                return (
                  <SessionCard
                    session={session}
                    sessionData={sessionData}
                    setSessionData={setSessionData}
                    currentSession={currentSession}
                    setCurrentSession={setCurrentSession}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </Router>
  );
}

export default SessionManager;
