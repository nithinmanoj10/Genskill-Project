import { layouts } from "chart.js";
import React, { useState, useEffect } from "react";

import { Doughnut } from "react-chartjs-2";

function TagDistribution(props) {
  const [tagLabels, setTagLabels] = useState([]);
  const [tagTime, setTagTime] = useState([]);
  const [tagColours, setTagColours] = useState([]);
  const [tagBorderColours, setTagBorderColours] = useState([]);

  useEffect(() => {
    const tagData = JSON.parse(localStorage.getItem("tagsData") || "[]");

    setTagLabels(
      tagData.map(function (tag) {
        return tag.name;
      })
    );

    setTagTime(
      tagData.map(function (tag) {
        return tag.tagTotalTime / 60;
      })
    );

    setTagColours(
      tagData.map(function (tag) {
        return tag.colour + "cc";
      })
    );
    setTagBorderColours(
      tagData.map(function (tag) {
        return tag.colour;
      })
    );
  }, []);

  return (
    <div className="tag-distribution">
      <Doughnut
        height={250}
        width={250}
        data={{
          labels: tagLabels,
          datasets: [
            {
              data: tagTime,
              backgroundColor: tagColours,
              borderColor: tagBorderColours,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: false,
          layout: {
            padding: 0,
          },
          plugins: {
            legend: {
              position: "top",
              maxWidth: 120,
              labels: {
                boxWidth: 10,
                boxHeight: 10,
              },
            },
            title: {
              display: false,
              text: "Tag Distribution",
            },
          },
        }}
      />
    </div>
  );
}

export default TagDistribution;
