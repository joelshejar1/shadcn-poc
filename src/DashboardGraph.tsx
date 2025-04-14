import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardGraph: React.FC = () => {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Data",
        data: [30, 40, 35, 50, 49, 60, 70, 90, 60, 50, 40, 30],
        backgroundColor: "#52c41a", // Use primary green
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
      title: {
        display: true,
        text: "Monthly Data Overview",
        color: "#FFFFFF",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
  };

  return (
    <div className="bg-card p-4 rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DashboardGraph;
