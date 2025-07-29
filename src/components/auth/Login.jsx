import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { handleLogIn, handleRegister } = useContext(AuthContext);
  const [isRegister, setIsRegister] = useState(false);
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    designation: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (isRegister) {
      handleRegister(
        credentials.firstName,
        credentials.lastName,
        credentials.email,
        credentials.password
      );
      alert(`Registered: ${credentials.firstName} ${credentials.lastName}`);
      setIsRegister(false);
    } else {
      handleLogIn(credentials.email, credentials.password);
    }

    setCredentials({ firstName: "", lastName: "", email: "", password: "" });
  };

  return (
    <div className="h-screen w-screen flex flex-col  items-center justify-center">
      <div className="rounded-md border-1 border-yellow-600 p-6 min-w-[90%] sm:min-w-[320px]">
        <p className="text-center font-bold text-yellow-600 text-2xl mb-[20px]">
          {isRegister ? "Register" : "Log In"}
        </p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 justify-center text-white"
        >
          {isRegister && (
            <>
              <input
                value={credentials.firstName}
                onChange={(e) =>
                  setCredentials({ ...credentials, firstName: e.target.value })
                }
                required
                className="bg-gray-800 p-2 rounded-md outline-none border-none"
                type="text"
                placeholder="Enter First Name"
              />
              <input
                value={credentials.lastName}
                onChange={(e) =>
                  setCredentials({ ...credentials, lastName: e.target.value })
                }
                required
                className="bg-gray-800 p-2 rounded-md outline-none border-none"
                type="text"
                placeholder="Enter Last Name"
              />
            </>
          )}

          <input
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
            className="bg-gray-800 p-2 rounded-md outline-none border-none"
            type="email"
            placeholder="Enter Email"
          />
          <input
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
            className="bg-gray-800 p-2 rounded-md outline-none border-none"
            type="password"
            placeholder="Enter Password"
          />

          <button className="p-2 cursor-pointer rounded-md bg-yellow-600 font-bold">
            {isRegister ? "Register" : "Log In"}
          </button>
        </form>

        <p
          className="text-sm text-center text-white mt-4 cursor-pointer hover:text-yellow-300"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Log in"
            : "Don't have an account? Register"}
        </p>
      </div>
    </div>
  );
};

export default Login;
