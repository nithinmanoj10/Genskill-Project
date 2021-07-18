import React, { Component } from "react";

import "../src/css/style.css";
import HomePage from "./components/Home Page/HomePage";
import TimerPage from "./components/Timer Page/TimerPage";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        {/* <HomePage /> */}
        <TimerPage />
      </div>
    );
  }
}
