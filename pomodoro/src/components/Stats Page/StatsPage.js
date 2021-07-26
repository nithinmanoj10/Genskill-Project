import React, { useState, useEffect } from "react";

import TagDistribution from "./TagDistribution";
import EmptyTasks from "../Task Manager/EmptyTasks";
import StatsCard from "./StatsCard";

import RegularShowBenson from "../../images/Mordecai-Rigby-benson.png";

import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import TimelapseIcon from "@material-ui/icons/Timelapse";

function StatsPage() {
  const [hasStats, setHasStats] = useState(true);

  const iconStyles = {
    fontSize: 23,
    fill: "#b8b8b8",
  };

  useEffect(() => {
    const tagsData = JSON.parse(localStorage.getItem("tagsData") || "[]");
    if (tagsData.length === 0) {
      setHasStats(false);
    }
  }, []);

  return (
    <div className="task-section">
      <header className="task-section__header">
        <h2 className="heading">Stats</h2>
      </header>

      {hasStats === true ? (
        <TagDistribution />
      ) : (
        <EmptyTasks
          image={RegularShowBenson}
          text="Your stats will appear once you start completing your tasks :P"
          alt="Benson wants you to do your job"
          height={300}
        />
      )}

      <div className="stats-card">
        <header className="stats-card__header">
          <AssignmentTurnedInIcon style={iconStyles} />
          <h2 className="stats-card__header__heading">Tasks</h2>
        </header>
        <StatsCard name="Task Completion" value="92%" />
        <StatsCard name="Avg. Task Duration" value="2.3 hrs" />
      </div>

      <div className="stats-card">
        <header className="stats-card__header">
          <MenuBookIcon style={iconStyles} />
          <h2 className="stats-card__header__heading">Sessions</h2>
        </header>
        <StatsCard name="Total Sessions" value="12" />
        <StatsCard name="Avg. Intervals" value="4.7" />
      </div>

      <div className="stats-card">
        <header className="stats-card__header">
          <TimelapseIcon style={iconStyles} />
          <h2 className="stats-card__header__heading">Activity</h2>
        </header>
        <StatsCard name="Total Hours Active" value="14 hrs" />
        <StatsCard name="Day Streak" value="5 Days" />
      </div>
    </div>
  );
}

export default StatsPage;
