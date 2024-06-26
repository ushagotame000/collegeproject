import React, { useState } from "react";
import { assets } from "../../assets/assets";
function Login() {
  return (
    <>
      <div className="login-page flex justify-center items-center h-screen bg-gray-100">
        <form className="container max-w-lg bg-black flex flex-col gap-7 rounded-xl text-base p-6 justify-center">
          <div className="login-title flex justify-between text-center font-bold text-xl font-mono">
            <h2 className="text-white">Login</h2>
            <img
              src={assets.cross_icon}
              alt="close"
              className="cursor-pointer w-4 bg-white rounded-sm"
            />
          </div>

          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Mobile number or Email"
              required
              className="border border-gray-300 p-3 rounded-sm w-full"
            />
          </div>

          <div className="Password1">
            <input
              type="password"
              name="password"
              placeholder="Password"
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
