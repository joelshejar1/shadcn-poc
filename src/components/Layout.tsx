// src/components/Layout.tsx
import React from "react";
import NavigationPanel from "./Navigationpanel";
import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const PermanentSidebar: React.FC = () => {
  return (
    <aside className="hidden md:block md:w-64 p-4 bg-gray-800">
      <h2 className="text-2xl font-bold mb-6" style={{ color: "#10B981" }}>
        My Dashboard
      </h2>
      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Customers
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Reports
        </NavLink>
      </nav>
    </aside>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Permanent sidebar for larger screens */}
      <PermanentSidebar />

      {/* NavigationPanel for smaller screens */}
      <div className="md:hidden">
        <NavigationPanel />
      </div>

      {/* Main content area */}
      <main className="flex-1 p-8 md:ml-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;
