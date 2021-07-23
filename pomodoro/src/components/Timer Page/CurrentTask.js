import React, { Component } from "react";

export default class CurrentTask extends Component {
  constructor(props) {
    super();
    this.state = {
      task: props.task,
    };
  }

  render() {
    return (
      <div className="current-task">
        <h3 className="current-task__heading">Current Task</h3>
        <h4 className="current-task__name">{this.state.task}</h4>
      </div>
    );
  }
}
