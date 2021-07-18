import React, { Component } from "react";

export default class ControlButton extends Component {
  constructor() {
    super();
    this.state = {
      current:
        "https://img.icons8.com/material-outlined/96/ffffff/pause--v1.png",
      pause: "https://img.icons8.com/material-outlined/96/ffffff/pause--v1.png",
      play: "https://img.icons8.com/material-rounded/96/ffffff/play.png",
      count: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newCurrent = {};
    if (this.state.count % 2 == 1) {
      this.setState({
        current: this.state.play,
        count: 2,
      });
    } else {
      this.setState({
        current: this.state.pause,
        count: 1,
      });
    }
  }

  render() {
    return (
      <a href="javascript:void(0)" className="control-button">
        <img
          src={this.state.current}
          alt="Control Button"
          className="control-button__icon"
          onClick={this.handleClick}
        />
      </a>
    );
  }
}
