import React, { Component } from "react";

export default class MobileNavBar extends Component {
  render() {
    return (
      <header className="header">
        <div className="mobile-navbar">
          <img
            src="https://img.icons8.com/plasticine/100/000000/tomato.png"
            alt="Tomato Pomodoro Logo"
            className="logo"
          />
          <h1 className="app-name">Pomodoro</h1>
          <a href="javascript:void(0)" className="hamburger-menu">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
              alt="Hamburger Menu Icon"
              className="hamburger-menu__icon"
            />
          </a>
        </div>
      </header>
    );
  }
}
