import React, { useState, useEffect } from "react";
import TagDistribution from "./TagDistribution";
import EmptyTasks from "../Task Manager/EmptyTasks";
import RegularShowBenson from "../../images/Mordecai-Rigby-benson.png";

function StatsPage() {
  const [hasStats, setHasStats] = useState(true);

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
    </div>
  );
}

export default StatsPage;
