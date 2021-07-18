import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <h1 className="timer__value">23:58</h1>
        <p className="timer__session">8/10</p>
      </div>
    );
  }
}
