import React, { useState } from "react";
import TagDistribution from "./TagDistribution";

function StatsPage() {
  return (
    <div className="task-section">
      <header className="task-section__header">
        <h2 className="heading">Stats</h2>
      </header>

      <TagDistribution />
    </div>
  );
}

export default StatsPage;
