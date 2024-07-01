import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/users/authSlice";
function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const dispatch = useAppDispatch();
  const nagivate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(
      loginUser({ email: userData.email, password: userData.password })
    );
    if (loginUser.fulfilled.match(result)) {
      nagivate("/");
    }
  };
  return (
    <>
      <div className="login-page flex justify-center items-center h-screen bg-gray-100">
        <form
          className="container max-w-lg bg-black flex flex-col gap-7 rounded-xl text-base p-6 justify-center w-96"
          onSubmit={handleSubmit}
        >
          <div className="login-title flex justify-between text-center font-bold text-xl font-mono">
            <h2 className="text-white">Login</h2>
          </div>

          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Mobile number or Email"
              value={userData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-sm w-full"
            />
          </div>

          <div className="Password1">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-sm w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-800 border-none p-3 rounded-md text-white"
          >
            Login
          </button>

          <p className="text-white">
            Create a new account?
            <span
              className="text-purple-500 font-semibold cursor-pointer"
              onClick={() => (window.location.href = "/signup")}
            >
              {" "}
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
