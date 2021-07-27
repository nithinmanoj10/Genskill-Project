import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "../src/css/style.css";
import HomePage from "./components/Home Page/HomePage";
import MobileNavBar from "./components/NavBar/MobileNavBar";
import TaskManager from "./components/Task Manager/TaskManager";
import SessionManager from "./components/Session Manager/SessionManager";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import StatsPage from "./components/Stats Page/StatsPage";
import SideDrawer from "./components/NavBar/SideDrawer";
import Overlay from "./components/NavBar/Overlay";

function App() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const sideMenuHandle = function () {
    const val = !isSideDrawerOpen;
    setIsSideDrawerOpen(val);
  };

  const sidemenuClickHandle = function () {
    sideMenuHandle();
  };

  const linkClickHandle = function () {
    sideMenuHandle();
  };

  const overlayClickHandle = function () {
    sideMenuHandle();
  };

  let sideDrawerStyle;
  let overlayStyle;

  if (isSideDrawerOpen === true) {
    sideDrawerStyle = "side-drawer--open";
    overlayStyle = "overlay--open";
  } else if (isSideDrawerOpen === false) {
    sideDrawerStyle = "side-drawer--close";
    overlayStyle = "overlay--close";
  }

  return (
    <div className="main">
      <SideDrawer styles={sideDrawerStyle} linkClickHandle={linkClickHandle} />
      <Overlay overlayClickHandle={overlayClickHandle} styles={overlayStyle} />

      <MobileNavBar sidemenuClickHandle={sidemenuClickHandle} />

      <Route path="/" exact component={HomePage} />
      <Route path="/task-manager" component={TaskManager} />
      <Route path="/session-manager" component={SessionManager} />
      <Route path="/pomodoro" component={Pomodoro} />
      <Route path="/stats" component={StatsPage} />
    </div>
  );
}

export default App;
