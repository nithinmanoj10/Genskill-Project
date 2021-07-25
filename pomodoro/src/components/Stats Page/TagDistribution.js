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
        // defaults={{
        //   layout: {
        //     padding: 10,
        //   },
        // }}
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
        // data={{
        //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //   datasets: [
        //     {
        //       label: "# of Votes",
        //       data: [12, 19, 3, 5, 2, 3],
        //       backgroundColor: [
        //         "rgba(255, 99, 132, 0.2)",
        //         "rgba(54, 162, 235, 0.2)",
        //         "rgba(255, 206, 86, 0.2)",
        //         "rgba(75, 192, 192, 0.2)",
        //         "rgba(153, 102, 255, 0.2)",
        //         "rgba(255, 159, 64, 0.2)",
        //       ],
        //       borderColor: [
        //         "rgba(255, 99, 132, 1)",
        //         "rgba(54, 162, 235, 1)",
        //         "rgba(255, 206, 86, 1)",
        //         "rgba(75, 192, 192, 1)",
        //         "rgba(153, 102, 255, 1)",
        //         "rgba(255, 159, 64, 1)",
        //       ],
        //       borderWidth: 1,
        //     },
        //   ],
        // }}
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
              display: true,
              text: "Tag Distribution",
            },
          },
        }}
      />
    </div>
  );
}

export default TagDistribution;
