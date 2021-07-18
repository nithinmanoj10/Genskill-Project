import React, { Component } from "react";
import Button from "../Button";
import HeroBox from "./HeroBox";
import MobileNavBar from "../NavBar/MobileNavBar";
import MoreInfo from "./MoreInfo";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HeroBox />
        <Button />
        <MoreInfo />
      </div>
    );
  }
}
