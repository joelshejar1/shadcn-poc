import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard: React.FC = () => {
  // Dummy data for a Line Chart (e.g., Monthly Sales)
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [15, 20, 18, 25, 30, 22],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.4,
      },
    ],
  };

  // Dummy data for a Bar Chart (e.g., Product Sales)
  const barData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Units Sold',
        data: [50, 75, 60],
        backgroundColor: ['#10B981', '#047857', '#059669'],
      },
    ],
  };

  // Dummy data for a Pie Chart (e.g., Customer Status)
  const pieData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#10B981', '#ef4444'],
      },
    ],
  };

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#10B981' }}>
        Dashboard
      </h1>
      <div className="grid gap-8">
        {/* Line Chart */}
        <div className="p-4 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Monthly Sales</h2>
          <Line data={lineData} />
        </div>

        {/* Bar Chart */}
        <div className="p-4 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Product Sales</h2>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="p-4 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Customer Status</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
