import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllAssignedTasks from "../others/AllAssignedTasks";
import AllEmployeeDetails from "../others/AllEmployeeDetails";
import Footer from "../others/Footer";

const AdminDashboard = () => {
  return (
    <>
      <div className="p-3 md:p-5 bg-[#1c1c1c] min-h-screen">
        <Header />
        <CreateTask />
        <AllEmployeeDetails />
        <AllAssignedTasks />
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
