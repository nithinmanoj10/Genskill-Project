import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "../src/css/style.css";
import HomePage from "./components/Home Page/HomePage";
import MobileNavBar from "./components/NavBar/MobileNavBar";
import TimerPage from "./components/Timer Page/TimerPage";
import TaskManager from "./components/Task Manager/TaskManager";
import SessionManager from "./components/Session Manager/SessionManager";

function App() {
  return (
    <div className="main">
      <MobileNavBar />

      <Route path="/" exact component={HomePage} />
      <Route path="/tasks" component={TaskManager} />
      <Route path="/session-manager" component={SessionManager} />
      <Route path="/timer" component={TimerPage} />
    </div>
  );
}

export default App;
