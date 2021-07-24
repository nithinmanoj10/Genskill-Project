import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MobileNavBar extends Component {
  render() {
    return (
      <header className="header">
        <div className="mobile-navbar">
          <div className="app-name">
            <Link to="/">
              <h1>Pomodoro</h1>
            </Link>
          </div>
          <Link to="/stats" className="hamburger-menu">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
              alt="Hamburger Menu Icon"
              className="hamburger-menu__icon"
            />
          </Link>
        </div>
      </header>
    );
  }
}
