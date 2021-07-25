import React from "react";

import RegularShowEnjoy from "../../images/Mordecai-Rigby-enjoying.png";

function EmptyTasks(props) {
  const styles = {
    height: props.height,
    width: props.width,
  };

  const imageStyles = {
    height: "100%",
    width: "auto",
    objectFit: "cover",
  };

  return (
    <div className="regular-show" style={styles}>
      <img
        src={props.image}
        alt={props.alt}
        className="regular-show__pic"
        style={imageStyles}
      />
      <p className="regular-show__text">{props.text}</p>
    </div>
  );
}

export default EmptyTasks;
