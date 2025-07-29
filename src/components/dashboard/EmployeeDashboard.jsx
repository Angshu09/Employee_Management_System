import React from "react";
import Header from "../others/Header";
import ActivityList from "../others/ActivityList";
import TaskList from "../others/TaskList";
import Footer from "../others/Footer";

const EmployeeDashboard = () => {
  
  return (
    <>
    <div className="bg-[#1c1c1c] min-h-screen p-3 md:p-5">
      <Header/>
      <ActivityList />
      <TaskList />
      
    </div>
    <Footer/>
    </>
  );
};

export default EmployeeDashboard;
