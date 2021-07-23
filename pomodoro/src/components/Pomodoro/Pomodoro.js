import React, { useState } from "react";
import SessionManager from "../Session Manager/SessionManager";
import TimerPage from "../Timer Page/TimerPage";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function Pomodoro() {
  // currentSession stores all the details of the session we click on
  const [currentSession, setCurrentSession] = useState({});

  return (
    <Router>
      <div className="pomodoro">
        <Switch>
          <Route path="/pomodoro/session-manager">
            <SessionManager
              currentSession={currentSession}
              setCurrentSession={setCurrentSession}
            />
          </Route>
          <Route path="/pomodoro/timer">
            <TimerPage
              currentSession={currentSession}
              setCurrentSession={setCurrentSession}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Pomodoro;
