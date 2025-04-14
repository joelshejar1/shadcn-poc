import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-20 w-64 p-4 bg-gray-800 transform 
        transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}
    >
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#10B981' }}>
        My Dashboard
      </h2>
      <nav className="space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Customers
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          Reports
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
