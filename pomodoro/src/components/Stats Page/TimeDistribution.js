import React from "react";
import { Bar } from "react-chartjs-2";

function TimeDistribution() {
  const statsData = JSON.parse(localStorage.getItem("statsData") || "[]")[0];
  const totalHours = statsData.time.totalHours;

  const ratio = Math.max.apply(Math, totalHours) / 100;
  const size = totalHours.length;
  let i = 0;

  for (i = 0; i < size; i++) {
    totalHours[i] = Math.round(totalHours[i] / ratio);
  }

  return (
    <div className="time-distribution">
      <Bar
        height={100}
        data={{
          labels: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
          ],
          datasets: [
            {
              data: totalHours,
              backgroundColor: ["#fc9686"],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              title: {
                display: false,
              },
              min: 0,
              max: 23,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: true,
              },
            },
          },
          maintainAspectRatio: false,
          responsive: true,
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

export default TimeDistribution;
