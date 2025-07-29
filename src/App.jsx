import React from "react";
import { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      {!loggedInUser ? (
        <Login />
      ) : loggedInUser.role === "admin" ? (
        <AdminDashboard />
      ) : loggedInUser.role === "employee" ? (
        <EmployeeDashboard />
      ) : (
        <div className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      )}
    </>
  );
};

export default App;
