import React, { useState, useEffect } from "react";

import TagDistribution from "./TagDistribution";
import EmptyTasks from "../Task Manager/EmptyTasks";
import StatsCard from "./StatsCard";

import RegularShowBenson from "../../images/Mordecai-Rigby-benson.png";

import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import PieChartIcon from "@material-ui/icons/PieChart";
import AccuracyMeter from "./AccuracyMeter";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import TimeDistribution from "./TimeDistribution";
import EqualizerIcon from "@material-ui/icons/Equalizer";

function StatsPage() {
  const [hasStats, setHasStats] = useState(true);

  const [taskCompletion, setTaskCompletion] = useState("-");
  const [avgTaskDuration, setAvgTaskDuration] = useState("-");
  const [totalSessions, setTotalSessions] = useState("-");
  const [avgIntervals, setAvgIntervals] = useState("-");
  const [totalHoursActive, setTotalHoursActive] = useState("-");
  const [estimateAccuracy, setEstimateAccuracy] = useState("N/A");
  const [streak, setStreak] = useState(0);

  const iconStyles = {
    fontSize: 19,
    fill: "#b8b8b8",
  };

  useEffect(() => {
    const statsData = JSON.parse(localStorage.getItem("statsData") || "[]")[0];
    if (statsData.time.totalActiveTime == 0) {
      setHasStats(false);
    }
  }, []);

  // for getting the statsData from localStorage once the page loads
  useEffect(() => {
    const statsData = JSON.parse(localStorage.getItem("statsData") || [])[0];
    if (statsData.tasks.taskCompletion != 0) {
      const num = statsData.tasks.taskCompletion * 100;
      setTaskCompletion(num.toFixed(1));
    }
    if (statsData.tasks.completedTasks != 0) {
      let duration =
        statsData.time.totalActiveTime / statsData.tasks.completedTasks;
      duration = duration / 3600;

      statsData.tasks.avgTaskDuration = duration;

      if (duration < 1) {
        setAvgTaskDuration(duration.toFixed(2));
      } else {
        setAvgTaskDuration(duration.toFixed(1));
      }
    }
    if (statsData.time.totalActiveTime != 0) {
      const totalHours = statsData.time.totalActiveTime / 3600;

      if (totalHours < 1) {
        setTotalHoursActive(totalHours.toFixed(2));
      } else {
        setTotalHoursActive(totalHours.toFixed(1));
      }
    }

    if (statsData.sessions.totalSession != 0) {
      setTotalSessions(statsData.sessions.totalSession);
      setAvgIntervals(statsData.sessions.avgIntervals);
    }

    if (statsData.days.streak != 0) {
      setStreak(statsData.days.streak);
    }

    // for estimate accuracy
    if (statsData.tasks.taskEstimateAccuracy.length !== 0) {
      const estimateArray = statsData.tasks.taskEstimateAccuracy;
      const totalAccuracy =
        estimateArray.reduce(function (total, currentValue) {
          return total + currentValue;
        }, 0) / estimateArray.length;
      setEstimateAccuracy(totalAccuracy);
    }

    const updatedStatsData = [];
    updatedStatsData.push(statsData);
    localStorage.setItem("statsData", JSON.stringify(updatedStatsData));
  }, []);

  return (
    <div className="task-section">
      <header className="task-section__header">
        <h2 className="heading">Stats</h2>
      </header>

      {hasStats === true ? (
        <div className="stats-grid">
          <div className="stats-card" id="time-distribution">
            <header className="stats-card__header">
              <EqualizerIcon style={iconStyles} />
              <h2 className="stats-card__header__heading">Time Distribution</h2>
            </header>
            <p className="stats-card__header__info">
              Normalised Distribution of when you are active throughout the day
            </p>
            <div className="graph-wrapper">
              <TimeDistribution />
            </div>
          </div>

          <div className="stats-card" id="tag-distribution">
            <header className="stats-card__header">
              <PieChartIcon style={iconStyles} />
              <h2 className="stats-card__header__heading">Tag Distribution</h2>
            </header>
            <TagDistribution />
          </div>

          <div className="stats-card" id="tasks-stats">
            <header className="stats-card__header">
              <AssignmentTurnedInIcon style={iconStyles} />
              <h2 className="stats-card__header__heading">Tasks</h2>
            </header>
            <StatsCard
              name="Task Completion"
              value={`${taskCompletion}${taskCompletion === "-" ? "" : "%"}`}
            />
            <StatsCard
              name="Avg. Task Duration"
              value={`${avgTaskDuration}${
                avgTaskDuration === "-" ? "" : " hrs"
              }`}
            />
          </div>

          <div className="stats-card" id="session-stats">
            <header className="stats-card__header">
              <MenuBookIcon style={iconStyles} />
              <h2 className="stats-card__header__heading">Sessions</h2>
            </header>
            <StatsCard name="Total Sessions" value={totalSessions} />
            <StatsCard name="Avg. Intervals" value={avgIntervals} />
          </div>

          <div className="stats-card" id="activity-stats">
            <header className="stats-card__header">
              <TimelapseIcon style={iconStyles} />
              <h2 className="stats-card__header__heading">Activity</h2>
            </header>
            <StatsCard
              name="Total Hours Active"
              value={`${totalHoursActive}${
                totalHoursActive === "-" ? "" : " hrs"
              }`}
            />
            <StatsCard
              name="Day Streak"
              value={`${streak} day${streak == 1 ? "" : "s"}`}
            />
          </div>

          <div className="stats-card" id="interval-estimate">
            <header className="stats-card__header">
              <TrackChangesIcon style={iconStyles} />
              <h2 className="stats-card__header__heading">
                Interval Estimation Accuracy
              </h2>
            </header>
            <p className="stats-card__header__info">
              How accurately you can guess the number of intervals required for
              completing a task
            </p>
            <AccuracyMeter estimateAccuracy={estimateAccuracy} />
          </div>
        </div>
      ) : (
        <EmptyTasks
          image={RegularShowBenson}
          text="Your stats will appear once you start completing your tasks :P"
          alt="Benson wants you to do your job"
          height={300}
        />
      )}
    </div>
  );
}

export default StatsPage;
