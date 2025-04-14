import React, { useState } from "react";
import DashboardGraph from "./DashboardGraph";

interface Customer {
  key: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}

// Dummy customer data
const dummyData: Customer[] = [
  { key: 1, name: "John Doe", email: "john@example.com", phone: "(123) 456-7890", status: "Active" },
  { key: 2, name: "Jane Smith", email: "jane@example.com", phone: "(098) 765-4321", status: "Inactive" },
  { key: 3, name: "Sam Johnson", email: "sam@example.com", phone: "(111) 222-3333", status: "Active" },
];

const CustomerDashboard: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <div>
      {/* Button to open the side sheet */}
      <div className="flex justify-end mb-4">
        <button
          onClick={openSheet}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-green-600 transition"
        >
          Open Details
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="text-white text-lg mb-2">Total Customers</h3>
          <p className="text-primary text-2xl">{dummyData.length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="text-white text-lg mb-2">Active Customers</h3>
          <p className="text-primary text-2xl">
            {dummyData.filter((c) => c.status === "Active").length}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="text-white text-lg mb-2">Inactive Customers</h3>
          <p className="text-primary text-2xl">
            {dummyData.filter((c) => c.status === "Inactive").length}
          </p>
        </div>
      </div>

      {/* Customer Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-card rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-white">Name</th>
              <th className="px-4 py-2 text-left text-white">Email</th>
              <th className="px-4 py-2 text-left text-white">Phone</th>
              <th className="px-4 py-2 text-left text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((customer) => (
              <tr key={customer.key} className="border-t border-gray-700">
                <td className="px-4 py-2 text-primary font-semibold">{customer.name}</td>
                <td className="px-4 py-2 text-white">{customer.email}</td>
                <td className="px-4 py-2 text-white">{customer.phone}</td>
                <td className="px-4 py-2 text-white">{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sheet (Drawer) for additional details */}
      {isSheetOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          onClick={closeSheet}
        >
          <div
            className="w-full max-w-md bg-background h-full shadow-xl p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sheet
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Customer Details Graph</h2>
              <button
                onClick={closeSheet}
                className="text-white text-2xl leading-none focus:outline-none"
              >
                &times;
              </button>
            </div>
            <DashboardGraph />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
