import React, { Component } from "react";

export default class SideMenuListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.data.name,
      link: props.data.link,
      icon: props.data.icon,
    };
  }

  render() {
    return (
      <li className="side-menu__list__item">
        <a href="javascript:void(0)" className="side-menu__list__item__link">
          <h3>{this.state.name}</h3>
          <div className="icon">{this.state.icon}</div>
        </a>
      </li>
    );
  }
}
