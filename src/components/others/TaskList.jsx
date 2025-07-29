import React, { useContext } from "react";
import Task from "./Task";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = () => {
  const { loggedInUser, userData } = useContext(AuthContext);
  const data = userData.employees.find(
    (employee) => employee.id == loggedInUser.id
  );
  return (
    <div
      id="taskList"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-8"
    >
      {data.tasks.map((task, index) => {
        return (
          <Task
            key={index}
            bgColor={
              task.newTask
                ? "bg-blue-200"
                : task.active
                ? "bg-yellow-200"
                : task.completed
                ? "bg-green-200"
                : "bg-red-200"
            }
            category={task.category}
            date={task.taskDate}
            title={task.taskTitle}
            description={task.taskDescription}
            btn1={
              task.newTask
                ? "Accept"
                : task.active
                ? "Complete"
                : task.completed
                ? "Completed"
                : "Failed"
            }
            btn2={task.newTask ? "" : task.active ? "Fail" : ""}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
