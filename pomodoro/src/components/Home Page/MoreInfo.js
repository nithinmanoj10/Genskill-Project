import React, { Component } from "react";

export default class MoreInfo extends Component {
  render() {
    return (
      <p className="more-info">
        To learn more, please visit{" "}
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          className="link--green"
        >
          Pomodoro Technique
        </a>
      </p>
    );
  }
}
