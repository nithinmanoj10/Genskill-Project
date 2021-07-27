import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import BarChartIcon from "@material-ui/icons/BarChart";

import ProductivePerson from "../../images/illustration-woman-online-mobile.svg";

function SideDrawer(props) {
  const iconStyles = {
    fontSize: 21,
    fill: "#707070",
  };

  return (
    <div className={`side-drawer ${props.styles}`}>
      <h1 className="side-drawer__heading">Menu</h1>
      <ul className="side-drawer__list">
        <li className="side-drawer__list__item">
          <HomeIcon style={iconStyles} />
          <Link to="/">
            <a
              className="side-drawer__list__item__link"
              onClick={props.linkClickHandle}
            >
              Home
            </a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <MenuBookIcon style={iconStyles} />
          <Link to="/pomodoro/session-manager">
            <a
              className="side-drawer__list__item__link"
              onClick={props.linkClickHandle}
            >
              Sessions
            </a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <ListAltIcon style={iconStyles} />
          <Link to="/task-manager/tasks">
            <a
              className="side-drawer__list__item__link"
              onClick={props.linkClickHandle}
            >
              Tasks
            </a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <LocalOfferIcon style={iconStyles} />
          <Link to="/task-manager/tags">
            <a
              className="side-drawer__list__item__link"
              onClick={props.linkClickHandle}
            >
              Tags
            </a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <BarChartIcon style={iconStyles} />
          <Link to="/stats">
            <a
              className="side-drawer__list__item__link"
              onClick={props.linkClickHandle}
            >
              Stats
            </a>
          </Link>
        </li>
      </ul>
      <div className="empty-space"></div>
      <img
        src={ProductivePerson}
        alt="Woman looking at big screen"
        className="side-drawer__image"
      />
      <h1 className="side-drawer__name">Pomodoro</h1>
    </div>
  );
}

export default SideDrawer;
