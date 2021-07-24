import React, { Component } from "react";

import HeroBoxImage from "../../images/illustration-working-brown.svg";

export default class HeroBox extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "",
      userName: "Stranger",
    };
  }

  componentDidMount() {
    var d = new Date();
    const hour = d.getHours();

    if (hour >= 0 && hour < 12) {
      this.setState({
        greeting: "Good Morning",
      });
    } else if (hour >= 12 && hour < 16) {
      this.setState({
        greeting: "Good Afternoon",
      });
    } else {
      this.setState({
        greeting: "Good Evening",
      });
    }
  }

  render() {
    return (
      <div className="hero-box">
        <h3 className="greeting">{this.state.greeting}</h3>
        <h2 className="user-name">{this.state.userName}</h2>
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
