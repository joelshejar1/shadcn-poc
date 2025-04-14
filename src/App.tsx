// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Layout>
  );
};

export default App;
