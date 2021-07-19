import React, { Component } from "react";

import SideMenuData from "./SideMenuData";

export default class SideMenuList extends Component {
  render() {
    return (
      <ul className="side-menu__list">
        {SideMenuData.map(function (item, key) {
          return <SideMenuList data={item} key={key} />;
        })}
      </ul>
    );
  }
}
