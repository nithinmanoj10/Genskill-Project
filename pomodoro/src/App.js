import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../src/css/style.css";
import HomePage from "./components/Home Page/HomePage";
import MobileNavBar from "./components/NavBar/MobileNavBar";
import TimerPage from "./components/Timer Page/TimerPage";
import TaskManager from "./components/Task Manager/TaskManager";
import SessionManager from "./components/Session Manager/SessionManager";

function App() {
  return (
    <Router>
      <div className="main">
        <MobileNavBar />
        <Switch>
          <Route path="/Genskill-Project" exact component={HomePage} />
          <Route path="/Genskill-Project/timer" component={TimerPage} />
          <Route path="/Genskill-Project/taskmanager" component={TaskManager} />
          <Route
            path="/Genskill-Project/Session-Manager"
            component={SessionManager}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
