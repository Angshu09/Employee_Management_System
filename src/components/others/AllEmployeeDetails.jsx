import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllEmployeeDetails = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-white font-semibold">Your Employees</h1>

      <p className="block sm:hidden mt-4  text-gray-600 font-medium">
        📢 Open in desktop to view full table
      </p>

      <table className="hidden sm:table table-auto border-none overflow-hidden mt-6 border w-full rounded-md">
        <thead>
          <tr>
            <th className="py-2 bg-purple-300">ID</th>
            <th className="bg-purple-300 py-2">First Name</th>
            <th className="py-2 bg-purple-300">Last Name</th>
            <th className="py-2 bg-blue-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.employees.map((employee) => (
            <tr key={employee.id} className="border cursor-pointer">
              <td className="text-center bg-purple-100 py-2">{employee.id}</td>
              <td className="text-center bg-purple-100 py-2">
                {employee.firstName}
              </td>
              <td className="text-center bg-purple-100 py-2">
                {employee.lastName}
              </td>
              <td className="text-center bg-blue-100 py-2">{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployeeDetails;
