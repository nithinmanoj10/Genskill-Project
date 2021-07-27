import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import BarChartIcon from "@material-ui/icons/BarChart";

import ProductivePerson from "../../images/illustration-woman-online-mobile.svg";

function SideDrawer() {
  const iconStyles = {
    fontSize: 21,
    fill: "#707070",
  };

  return (
    <div className="side-drawer">
      <h1 className="side-drawer__heading">Menu</h1>
      <ul className="side-drawer__list">
        <li className="side-drawer__list__item">
          <HomeIcon style={iconStyles} />
          <Link>
            <a className="side-drawer__list__item__link">Home</a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <MenuBookIcon style={iconStyles} />
          <Link>
            <a className="side-drawer__list__item__link">Sessions</a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <ListAltIcon style={iconStyles} />
          <Link>
            <a className="side-drawer__list__item__link">Tasks</a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <LocalOfferIcon style={iconStyles} />
          <Link>
            <a className="side-drawer__list__item__link">Tags</a>
          </Link>
        </li>
        <li className="side-drawer__list__item">
          <BarChartIcon style={iconStyles} />
          <Link>
            <a className="side-drawer__list__item__link">Stats</a>
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
