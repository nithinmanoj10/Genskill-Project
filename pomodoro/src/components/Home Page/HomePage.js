import React, { Component } from "react";
import Button from "../Button";
import HeroBox from "./HeroBox";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HeroBox />
        <div class="homepage__buttons">
          <Button text="View Tasks" to="/Genskill-Project/taskmanager" />
          <Button text="Start" to="/Genskill-Project/Session-Manager" />
        </div>
      </div>
    );
  }
}
