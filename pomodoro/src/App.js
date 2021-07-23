import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "../src/css/style.css";
import HomePage from "./components/Home Page/HomePage";
import MobileNavBar from "./components/NavBar/MobileNavBar";
import TaskManager from "./components/Task Manager/TaskManager";
import SessionManager from "./components/Session Manager/SessionManager";
import Pomodoro from "./components/Pomodoro/Pomodoro";

function App() {
  return (
    <div className="main">
      <MobileNavBar />

      <Route path="/" exact component={HomePage} />
      <Route path="/task-manager" component={TaskManager} />
      <Route path="/session-manager" component={SessionManager} />
      <Route path="/pomodoro" component={Pomodoro} />
    </div>
  );
}

export default App;
