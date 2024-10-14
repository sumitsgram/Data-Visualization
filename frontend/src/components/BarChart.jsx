import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, onBarClick }) => {
  const options = {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const feature = data.labels[index];
        onBarClick(feature);
      }
    },
    scales: {
      x: { title: { display: true, text: "Features" } },
      y: { title: { display: true, text: "Total Time Spent" } },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
