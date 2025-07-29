import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Task = ({ bgColor, category, date, title, description, btn1, btn2 }) => {
  const { loggedInUser, setUserData, userData } = useContext(AuthContext);

  const failTask = () => {
    let employees = userData.employees;

    employees = employees.map((employee) => {
      if (employee.id == loggedInUser.id) {
        let updatedActive = employee.taskCounts.active;
        let updatedFailed = employee.taskCounts.failed;

        const updatedTasks = employee.tasks.map((task) => {
          if (task.taskTitle == title) {
            if (task.active) {
              updatedActive -= 1;
              updatedFailed += 1;
            }

            return {
              ...task,
              active: false,
              failed: true,
            };
          }
          return task;
        });

        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: {
            ...employee.taskCounts,
            active: updatedActive,
            failed: updatedFailed,
          },
        };
      }
      return employee;
    });

    setUserData((prev) => ({ ...prev, employees }));
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const acceptTask = () => {
    let employees = userData.employees;

    employees = employees.map((employee) => {
      if (employee.id == loggedInUser.id) {
        let updatedActive = employee.taskCounts.active;
        let updatedNewTask = employee.taskCounts.newTask;

        const updatedTasks = employee.tasks.map((task) => {
          if (task.taskTitle == title) {
            if (task.newTask) {
              updatedNewTask -= 1;
              updatedActive += 1;
            }

            return {
              ...task,
              active: true,
              newTask: false,
            };
          }
          return task;
        });

        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: {
            ...employee.taskCounts,
            active: updatedActive,
            newTask: updatedNewTask,
          },
        };
      }

      return employee;
    });

    setUserData((prev) => ({ ...prev, employees }));
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const completeTask = () => {
    let employees = userData.employees;

    employees = employees.map((employee) => {
      if (employee.id == loggedInUser.id) {
        let updatedActive = employee.taskCounts.active;
        let updatedCompleted = employee.taskCounts.completed;

        const updatedTasks = employee.tasks.map((task) => {
          if (task.taskTitle == title) {
            if (task.active) {
              updatedActive -= 1;
              updatedCompleted += 1;
            }

            return {
              ...task,
              active: false,
              completed: true,
            };
          }
          return task;
        });

        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: {
            ...employee.taskCounts,
            active: updatedActive,
            completed: updatedCompleted,
          },
        };
      }

      return employee;
    });

    setUserData((prev) => ({ ...prev, employees }));
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <div
      className={`h-[380px] select-none flex flex-col p-4 rounded-md ${bgColor}`}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="bg-red-700 py-2 px-4 rounded-md text-sm text-white">
            {category}
          </div>
          <div className="text-sm">{date}</div>
        </div>
        <div className="mt-5 text-2xl font-semibold">
          <h2>{title}</h2>
        </div>
      </div>
      <div
        id="taskDescription"
        className=" mt-3 text-sm flex-grow overflow-y-scroll overflow-x-hidden break-words "
      >
        <p>{description}</p>
      </div>
      <div className="mt-3 flex justify-between  text-white text-sm">
        <button
          onClick={() => {
            return btn1 === "Complete" ? completeTask() : acceptTask();
          }}
          disabled={btn1 === "Completed" || btn1 === "Failed"}
          className={`p-2 rounded-md ${
            btn1 === "Failed"
              ? "w-full cursor-not-allowed bg-red-500"
              : btn1 === "Completed"
              ? "w-full cursor-not-allowed"
              : "w-[47%] cursor-pointer  "
          } bg-green-600`}
        >
          {btn1}
        </button>
        {btn2 ? (
          <button
            onClick={failTask}
            className="p-2 w-[47%] bg-red-500 rounded-md cursor-pointer "
          >
            {btn2}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Task;
