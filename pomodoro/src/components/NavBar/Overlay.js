import React from "react";

function Overlay(props) {
  return (
    <div
      className={`overlay ${props.styles}`}
      onClick={props.overlayClickHandle}
    ></div>
  );
}

export default Overlay;
