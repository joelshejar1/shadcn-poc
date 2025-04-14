import React from "react";
import CustomerDashboard from "./CustomerDashBoard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-header text-white px-6 py-4 flex items-center">
        <h1 className="text-xl font-bold text-primary">Customer Dashboard</h1>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-background text-white p-4">
          <nav>
            <ul>
              <li className="py-2 px-4 hover:bg-card rounded-md cursor-pointer">Dashboard</li>
              <li className="py-2 px-4 hover:bg-card rounded-md cursor-pointer">Customers</li>
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 bg-background p-6">
          <CustomerDashboard />
        </main>
      </div>
    </div>
  );
};

export default App;
