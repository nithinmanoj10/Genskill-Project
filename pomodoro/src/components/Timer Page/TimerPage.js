import React, { Component, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import CurrentTask from "./CurrentTask";
import Timer from "./Timer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseWarningMessage from "./CloseWarningMessage";

function TimerPage({ currentSession, setCurrentSession }) {
  useEffect(() => {
    return () => {
      console.log(currentSession);
      const sessionsData = JSON.parse(
        localStorage.getItem("sessionsData") || "[]"
      );

      const updatedSessionsData = sessionsData.map(function (session) {
        if (currentSession.id === session.id) {
          return currentSession;
        }
        return session;
      });

      console.log(updatedSessionsData);
      localStorage.setItem("sessionsData", JSON.stringify(updatedSessionsData));
    };
  }, []);

  const {
    activeTime,
    shortBreak,
    longBreak,
    currentInterval: currentBlock,
    intervals: blocks,
  } = currentSession;

  const [isSession, setIsSession] = useState(true);
  const [timerIsStarted, setTimerIsStarted] = useState(false);

  return (
    <Router>
      <div className="timerpage">
        <div className="timerpage__back">
          <Link
            to={`${
              timerIsStarted === false
                ? "/pomodoro/session-manager"
                : "/pomodoro/timer/close-message"
            }`}
          >
            <ArrowBackIosIcon />
          </Link>
        </div>

        <Switch>
          <Route path="/pomodoro/timer/close-message">
            <CloseWarningMessage />
          </Route>
        </Switch>

        {isSession === true ? (
          <CurrentTask task={currentSession.task} />
        ) : (
          <h1>Break Time</h1>
        )}
        <Timer
          activeTime={activeTime}
          shortBreak={shortBreak}
          longBreak={longBreak}
          currentBlock={currentBlock}
          blocks={blocks}
          currentSession={currentSession}
          setCurrentSession={setCurrentSession}
          isSession={isSession}
          setIsSession={setIsSession}
          setTimerIsStarted={setTimerIsStarted}
        />
      </div>
    </Router>
  );
}

export default TimerPage;
