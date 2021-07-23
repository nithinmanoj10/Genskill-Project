import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import CreateSession from "./CreateSession";
import SessionCard from "./SessionCard";
import EmptyTasks from "../Task Manager/EmptyTasks";
import RegularShowReading from "../../images/Rigby-reading.png";
import TimerPage from "../Timer Page/TimerPage";

function SessionManager({ currentSession, setCurrentSession }) {
  const [sessionData, setSessionData] = useState([
    ...JSON.parse(localStorage.getItem("sessionsData") || "[]"),
  ]);

  return (
    <Router>
      <div className="task-manager">
        <div className="task-section">
          <header className="task-section__header">
            <h2 className="heading">Sessions</h2>
            <Link
              to="/pomodoro/session-manager/create-session"
              className="add-task"
            >
              <h4>New Session</h4>
              <AddIcon className="add-task__icon" />
            </Link>
          </header>
          <Switch>
            <Route path="/pomodoro/session-manager/create-session">
              <CreateSession
                sessionData={sessionData}
                setSessionData={setSessionData}
              />
            </Route>
          </Switch>
          {sessionData.length === 0 ? (
            <EmptyTasks
              image={RegularShowReading}
              text="Create a session and let's get productive :D"
              alt="Rigby Reading"
            />
          ) : (
            sessionData.map(function (session) {
              return (
                <SessionCard
                  session={session}
                  sessionData={sessionData}
                  setSessionData={setSessionData}
                  currentSession={currentSession}
                  setCurrentSession={setCurrentSession}
                />
              );
            })
          )}
        </div>
      </div>
    </Router>
  );
}

export default SessionManager;
