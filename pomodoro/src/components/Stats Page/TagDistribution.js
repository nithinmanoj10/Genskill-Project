import React, { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";

function TagDistribution(props) {
  const [tagLabels, setTagLabels] = useState([]);
  const [tagTime, setTagTime] = useState([]);
  const [tagColours, setTagColours] = useState([]);

  useEffect(() => {
    const tagData = JSON.parse(localStorage.getItem("tagsData"));

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
        return tag.colour;
      })
    );
  }, []);

  return (
    <div className="tag-distribution">
      <Pie
        height={400}
        width={600}
        data={{
          labels: tagLabels,
          datasets: [
            {
              data: tagTime,
              backgroundColor: tagColours,
              borderColor: tagColours,
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
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Chart.js Pie Chart",
            },
          },
        }}
      />
    </div>
  );
}

export default TagDistribution;
