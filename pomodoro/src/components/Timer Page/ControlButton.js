import React, { Component } from "react";

export default class CancelButton extends Component {
  constructor(props) {
    super();
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <a href="javascript:void(0)" className="button button--cancel">
        {this.state.text}
      </a>
    );
  }
}
