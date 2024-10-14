import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-zoom";

const LineChart = ({ data }) => {
  const options = {
    scales: {
      x: { title: { display: true, text: "Time" } },
      y: { title: { display: true, text: "Value" } },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          enabled: true,
          mode: "x",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
