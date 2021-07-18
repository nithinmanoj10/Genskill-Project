import React, { Component } from "react";

export default class CurrentTask extends Component {
  render() {
    return (
      <div className="current-task">
        <h3 className="current-task__heading">Current Task</h3>
        <h4 className="current-task__name">
          Migrate The Database To Production
        </h4>
      </div>
    );
  }
}
