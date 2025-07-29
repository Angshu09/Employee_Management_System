import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { setUserData, userData } = useContext(AuthContext);
  const [data, setData] = useState({
    task: "",
    date: "",
    id: "",
    category: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(data);

    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: data.task,
      taskDescription: data.description,
      taskDate: data.date,
      category: data.category,
    };

    let employees = JSON.parse(localStorage.getItem("employees"));
    employees.forEach((employee) => {
      if (employee.id == data.id) {
        employee.tasks.push(newTask);
        employee.taskCounts.newTask = employee.taskCounts.newTask + 1;
      }
    });

    setUserData((prev) => ({ ...prev, employees: employees }));
    localStorage.setItem("employees", JSON.stringify(employees));

    setData({
      task: "",
      date: "",
      id: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="mt-8">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="bg-[#222222] flex md:flex-row flex-col justify-between p-3 md:p-5 rounded-lg"
      >
        <div className=" text-white  md:w-1/2">
          <div>
            <p>Task</p>
            <input
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, task: e.target.value };
                })
              }
              className="border w-full md:w-[90%] rounded-md p-2 outline-none mt-1 mb-3"
              type="text"
              value={data.task}
              placeholder="Write the task"
              required
            />
          </div>

          <div>
            <p>Date</p>
            <input
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, date: e.target.value };
                })
              }
              className="border w-full md:w-[90%] rounded-md p-2 outline-none mt-1 mb-3"
              type="date"
              name=""
              value={data.date}
              required
            />
          </div>

          <div>
            <p>Assign to</p>
            <select
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, id: e.target.value };
                })
              }
              className="border bg-[#222222] w-full md:w-[90%] rounded-md p-2 outline-none mt-1 mb-3"
              value={data.id}
              required
            >
              <option value="">-- Select Employee --</option>
              {userData?.employees?.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.id}, {emp.firstName} {emp.lastName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p>Category</p>
            <input
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, category: e.target.value };
                })
              }
              value={data.category}
              className="border w-full md:w-[90%] rounded-md p-2 outline-none mt-1 mb-3 md:mb-0"
              type="text"
              placeholder="Write the category"
            />
          </div>
        </div>

        <div className="md:w-1/2 mt-1 flex text-white">
          <div className="flex flex-grow flex-col">
            <p>Description</p>
            <textarea
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, description: e.target.value };
                })
              }
              placeholder="Write the description of the task."
              className="block h-56 outline-none p-3 flex-grow mt-1 w-full border border-gray-300"
              name="description"
              value={data.description}
            ></textarea>
            <button className="bg-amber-400 sm:w-1/2 mt-3 p-3 rounded-lg outline-none cursor-pointer text-black font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
