import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleClick: props.handleClick,
    };
  }

  render() {
    return (
      <Link
        href="javascript:void(0)"
        className="button button--basic"
        onClick={this.state.handleClick}
        to="/timer"
      >
        Start your tasks
      </Link>
    );
  }
}
