import React, { Component } from "react";

import "../src/css/style.css";
import HomePage from "./components/Home Page/HomePage";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <HomePage />
      </div>
    );
  }
}
