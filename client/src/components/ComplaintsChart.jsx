import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Resolved", "Pending", "Undergoing"],
  datasets: [
    {
      label: "# of Complaints",
      data: [4, 3, 1],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ComplaintsChart = () => {
  return (
    <div className="w-1/2 mx-auto"> {/* Adjust the width as needed */}
      <Pie data={data} />
    </div>
  );
};

export default ComplaintsChart;
