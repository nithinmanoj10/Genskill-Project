import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld";

import "../src/css/style.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}
