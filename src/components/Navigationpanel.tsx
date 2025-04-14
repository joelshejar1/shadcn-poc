// src/components/NavigationPanel.tsx
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavigationPanel: React.FC = () => {
  return (
    <Sheet>
      {/* The SheetTrigger renders a button that opens/closes the panel.
          The "asChild" prop lets the Sheet use your custom button. */}
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Menu className="mr-2 h-4 w-4" />
          Open Navigation
        </Button>
      </SheetTrigger>

      {/* The SheetContent slides in from the left. You can adjust its content and styling. */}
      <SheetContent side="left" className="bg-gray-800 p-4">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold mb-4" style={{ color: "#10B981" }}>
            My Dashboard
          </SheetTitle>
        </SheetHeader>
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
      </SheetContent>
    </Sheet>
  );
};

export default NavigationPanel;
