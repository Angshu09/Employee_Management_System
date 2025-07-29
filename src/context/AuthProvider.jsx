import React, { createContext, useEffect, useState } from "react";
import {
  getLocalStorageItems,
  setLocalStorageItems,
} from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    setLocalStorageItems();
    const { employees, admin } = getLocalStorageItems();
    setUserData({ employees, admin });

    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const userInfo = JSON.parse(user);
      setLoggedInUser(userInfo);
    }
  }, []);

  const handleLogIn = (email, password) => {
    if (userData.employees || userData.admin) {
      const admin = userData.admin.find(
        (e) => e.email === email && e.password === password
      );
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (admin) {
        const userObj = {
          role: "admin",
          id: admin.id,
          firstName: admin.firstName,
          lastName: admin.lastName,
        };
        setLoggedInUser(userObj);
        localStorage.setItem("loggedInUser", JSON.stringify(userObj));
      } else if (employee) {
        const userObj = {
          role: "employee",
          id: employee.id,
          firstName: employee.firstName,
          lastName: employee.lastName,
        };
        setLoggedInUser(userObj);
        localStorage.setItem("loggedInUser", JSON.stringify(userObj));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("No user data available, You have to first create an account.");
    }
  };

  const handleRegister = (firstName, lastName, email, password) => {
    let { employees } = getLocalStorageItems();
    let newUser = {
      id: employees.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    };
    employees.push(newUser);
    setUserData((prev) => ({ ...prev, employees: employees }));
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          userData,
          setUserData,
          loggedInUser,
          setLoggedInUser,
          handleLogIn,
          handleRegister,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
