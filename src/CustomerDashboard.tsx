import React from 'react';

// Define a type for our customer data
interface Customer {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
}

// Dummy customer data
const dummyCustomers: Customer[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Alex Johnson', email: 'alex@example.com', status: 'Active' },
];

const CustomerDashboard: React.FC = () => {
  return (
    // Container with dark background; 'dark' class ensures Tailwind applies dark mode rules.
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      {/* Header with the primary green colour */}
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#10B981' }}>
        Customer Dashboard
      </h1>
      
      {/* Dashboard grid for customer cards */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {dummyCustomers.map((customer) => (
          <div
            key={customer.id}
            className="p-4 bg-gray-800 rounded-md shadow-md transition hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{customer.name}</h2>
            <p className="text-sm text-gray-400">{customer.email}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 text-sm font-medium rounded ${
                customer.status === 'Active'
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
            >
              {customer.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;
