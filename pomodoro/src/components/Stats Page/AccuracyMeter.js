import React from "react";
import { useState, useEffect } from "react";

import { Doughnut } from "react-chartjs-2";

function AccuracyMeter(props) {
  useEffect(() => {
    const statsData = JSON.parse(localStorage.getItem("statsData") || "[]")[0];
  }, []);

  const accuracy = props.estimateAccuracy;
  const accuracyData = [accuracy, 100 - accuracy];

  let color;
  let transparentColor = "rgba(255, 99, 132, 0)";

  if (accuracy >= 90) {
    color = "rgba(75, 192, 192, 1)";
  }
  if (accuracy >= 50 && accuracy < 90) {
    color = "rgba(255, 159, 64, 1)";
  }
  if (accuracy < 50) {
    color = "rgba(255, 99, 132, 1)";
  }

  return (
    <div className="accuracy-meter">
      <h1 className="accuracy-meter__value">
        {accuracy.toFixed(2)}
        {accuracy == "N/A" ? "" : "%"}
      </h1>
      <Doughnut
        // defaults={{
        //   layout: {
        //     padding: 10,
        //   },
        // }}
        height={250}
        width={250}
        // data={{
        //   labels: tagLabels,
        //   datasets: [
        //     {
        //       data: tagTime,
        //       backgroundColor: tagColours,
        //       borderColor: tagBorderColours,
        //       borderWidth: 1,
        //     },
        //   ],
        // }}
        data={{
          labels: ["", ""],
          datasets: [
            {
              label: "# of Votes",
              data: accuracyData,
              backgroundColor: [color, transparentColor],
              borderColor: ["#e6e6e6"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          cutout: 90,
          responsive: false,
          layout: {
            padding: 0,
          },
          plugins: {
            legend: {
              display: false,
              position: "top",
              maxWidth: 120,
              labels: {
                boxWidth: 10,
                boxHeight: 10,
              },
            },
            tooltip: {
              enabled: false,
            },
          },
        }}
      />
    </div>
  );
}

export default AccuracyMeter;
