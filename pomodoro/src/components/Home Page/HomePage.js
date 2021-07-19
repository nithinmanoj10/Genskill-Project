import React, { Component } from "react";
import Button from "../Button";
import HeroBox from "./HeroBox";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HeroBox />
        <Button />
      </div>
    );
  }
}
