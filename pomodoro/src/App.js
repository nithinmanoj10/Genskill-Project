import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../src/css/style.css";
import HomePage from "./components/Home Page/HomePage";
import MobileNavBar from "./components/NavBar/MobileNavBar";
import TimerPage from "./components/Timer Page/TimerPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <MobileNavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/timer" component={TimerPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
