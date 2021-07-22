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
          <Link>
            <Button text="View Tasks" to="/taskmanager/tasks" />
          </Link>
          <Link>
            <Button text="Start" to="/Session-Manager" />
          </Link>
        </div>
      </div>
    );
  }
}
