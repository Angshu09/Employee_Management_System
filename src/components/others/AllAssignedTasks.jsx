import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Modal from "../../modal/Modal";

const AllAssignedTasks = () => {
  const { userData } = useContext(AuthContext);
  const [selected, setSelected] = useState(null);

  const renderTasks = (title, filterFn) => (
    <>
      <p className="font-semibold mt-2">{title}</p>
      {selected.tasks.filter(filterFn).map((task, index) => (
        <p key={index}>
          ({task.taskTitle}, {task.category}, {task.taskDescription},{" "}
          {task.taskDate})
        </p>
      ))}
    </>
  );

  return (
    <div className="mt-10 ">
      <p className="text-3xl  font-semibold text-white">Your Assigned Tasks</p>

      <p className="block sm:hidden mt-4  text-gray-600 font-medium">
        📢 Open in desktop to view full table
      </p>

      <table className="hidden sm:table table-auto border-none overflow-hidden mt-6 border w-full rounded-md">
        <thead>
          <tr>
            <th className="py-2 bg-purple-300">ID</th>
            <th className="bg-purple-300 py-2">Name</th>
            <th className="py-2 bg-yellow-200">Active</th>
            <th className="py-2 bg-blue-300">New</th>
            <th className="py-2 bg-green-300">Completed</th>
            <th className="py-2 bg-red-400">Failed</th>
          </tr>
        </thead>
        <tbody>
          {userData.employees.map((employee) => (
            <tr
              key={employee.id}
              className="border cursor-pointer"
              onClick={() => setSelected(employee)}
            >
              <td className="text-center bg-purple-100 py-2">{employee.id}</td>
              <td className="text-center bg-purple-100 py-2">
                {employee.firstName}
              </td>
              <td className="text-center bg-yellow-100 py-2">
                {employee.taskCounts.active}
              </td>
              <td className="text-center bg-blue-200 py-2">
                {employee.taskCounts.newTask}
              </td>
              <td className="text-center bg-green-200 py-2">
                {employee.taskCounts.completed}
              </td>
              <td className="text-center bg-red-200 py-2">
                {employee.taskCounts.failed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <h2 className="text-xl font-bold">{selected.firstName}</h2>
          <p className="mt-2">
            <strong>🪪 ID -</strong> {selected.id}
          </p>
          <p className="mt-2">
            <strong>✉️ Email -</strong> {selected.email}
          </p>

          {renderTasks("🟢 Active Tasks -", (t) => t.active)}
          {renderTasks("🔵 New Tasks -", (t) => t.active && t.newTask)}
          {renderTasks("✅ Completed Tasks -", (t) => t.completed)}
          {renderTasks("💔 Failed Tasks -", (t) => t.failed)}
        </Modal>
      )}
    </div>
  );
};

export default AllAssignedTasks;
