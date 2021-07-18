import React, { Component } from "react";

import HeroBoxImage from "../../images/illustration-working-brown.svg";

export default class HeroBox extends Component {
  render() {
    return (
      <div className="hero-box">
        <h3 className="greeting">Good Morning</h3>
        <h2 className="user-name">Nithin</h2>
        <img
          src={HeroBoxImage}
          alt="Girl looking at computer, being productive"
          className="hero-box__image"
        />
        <p className="hero-box__description">
          Pomodoro will make your work easier and more
          <span class="bold-text"> productive</span>
        </p>
      </div>
    );
  }
}
