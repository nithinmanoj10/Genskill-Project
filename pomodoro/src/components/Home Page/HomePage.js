import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import HeroBox from "./HeroBox";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HeroBox />
        <div class="homepage__buttons">
          <Link to="/task-manager">
            <Button text="View Tasks" />
          </Link>
          <Link to="/session-manager">
            <Button text="Start" />
          </Link>
        </div>
      </div>
    );
  }
}