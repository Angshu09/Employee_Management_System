import React, { useContext } from "react";
import Activity from "./Activity";
import { AuthContext } from "../../context/AuthProvider";

const ActivityList = () => {
  const { loggedInUser, userData } = useContext(AuthContext);

  const data = userData.employees.find(
    (employee) => employee.id == loggedInUser.id
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mt-7 gap-4 text-black">
      
      <Activity
        count={data.taskCounts.active}
        title={"Active Task"}
        color={"bg-yellow-200"}
      />
      <Activity
        count={data.taskCounts.newTask}
        title={"New Task"}
        color={"bg-blue-200"}
      />
      <Activity
        count={data.taskCounts.completed}
        title={"Completed Task"}
        color={"bg-green-200"}
      />
      <Activity
        count={data.taskCounts.failed}
        title={"Failed Task"}
        color={"bg-red-200"}
      />
    </div>
  );
};

export default ActivityList;
