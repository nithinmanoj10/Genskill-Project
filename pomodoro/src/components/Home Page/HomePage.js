import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import HeroBox from "./HeroBox";

function HomePage() {
  useEffect(() => {
    const tempStatsData = JSON.parse(localStorage.getItem("statsData") || "[]");
    if (tempStatsData.length === 0) {
      const statsData = [
        {
          tasks: {
            totalTasks: 0,
            completedTasks: 0,
            taskCompletion: 0,
            avgTaskDuration: 0,
            taskEstimateAccuracy: [],
          },
          time: {
            totalActiveTime: 0,
            totalHours: Array(24).fill(0),
          },
          sessions: {
            totalSession: 0,
            totalIntervals: 0,
            avgIntervals: 0,
          },
          days: {
            currentDay: "-",
            streak: 1,
          },
        },
      ];
      localStorage.setItem("statsData", JSON.stringify(statsData));
    }
  }, []);

  return (
    <div className="homepage">
      <HeroBox />
      <div class="homepage__buttons">
        <Link to="/pomodoro/session-manager">
          <Button text="Start" />
        </Link>
        <Link to="/task-manager/tasks">
          <Button text="View Tasks" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
