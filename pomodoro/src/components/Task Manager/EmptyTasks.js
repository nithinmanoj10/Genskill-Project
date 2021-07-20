import React from "react";

import RegularShowEnjoy from "../../images/Mordecai-Rigby-enjoying.png";

function EmptyTasks(props) {
  return (
    <div className="regular-show">
      <img src={props.image} alt={props.alt} className="regular-show__pic" />
      <p className="regular-show__text">{props.text}</p>
    </div>
  );
}

export default EmptyTasks;
