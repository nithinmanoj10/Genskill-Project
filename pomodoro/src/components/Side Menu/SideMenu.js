import React, { Component } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import SideMenuList from "./SideMenuList";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <div className="side-menu__top">
          <h2 className="heading">Menu</h2>
          <a href="javascript:void(0)" className="close-icon">
            <ClearIcon />
          </a>
        </div>
        <SideMenuList />
      </div>
    );
  }
}
