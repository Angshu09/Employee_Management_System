import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { loggedInUser , setLoggedInUser} = useContext(AuthContext)

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    setLoggedInUser(null)
  };

  return (
    <div className="flex justify-between items-center text-white">
      <div>
        <h1 className="md:text-xl font-medium">Hello 👋</h1>
        <h1 className="text-xl  sm:text-3xl font-semibold">{loggedInUser.firstName + " " + loggedInUser.lastName}</h1>
      </div>
      <div>
        <button
          onClick={logOutUser}
          className="bg-red-500 py-3 px-2 sm:px-4 cursor-pointer rounded-sm border-none outline-none font-bold  text-sm"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
