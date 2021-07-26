import React, { useState } from "react";

function StatsCard(props) {
  console.log(props);

  return (
    <div className="stat">
      <p className="stat__name">{props.name}</p>
      <h3 className="stat__value">{props.value}</h3>
    </div>
  );
}

export default StatsCard;
