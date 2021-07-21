import React, { Component } from "react";
import MobileNavBar from "../NavBar/MobileNavBar";
import CancelButton from "./CancelButton";
import ControlButton from "./ControlButton";
import CurrentTask from "./CurrentTask";
import DoneButton from "./DoneButton";
import Timer from "./Timer";

export default class TimerPage extends Component {
  render() {
    return (
      <div className="timerpage">
        {/* <CurrentTask /> */}
        {/* <DoneButton /> */}
        <Timer />
        {/* <ControlButton /> */}
        {/* <CancelButton /> */}
      </div>
    );
  }
}
