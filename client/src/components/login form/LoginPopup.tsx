import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login absolute z-30 w-full h-auto grid place-content-center bg none">
      <form
        // onSubmit={onLogin}
        className="container max-w-96 bg-black flex flex-col gap-7 rounded-xl text-base p-6 justify-center mt-20"
      >
        <div className="login-title flex justify-between text-center font-bold text-xl font-mono">
          <h2 className="signup text-white">{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            className="cursor-pointer w-4 bg-white rounded-sm"
          />
        </div>

        {currState === "Sign Up" && (
          <div className="login-input grid grid-cols-2 gap-2">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="border border-gray-300 p-3 rounded-sm"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="border border-gray-300 p-3 rounded-sm"
            />
          </div>
        )}

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

        {currState === "Sign Up" && (
          <div className="Password2">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
              className="border border-gray-300 p-3 rounded-sm w-full"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-purple-500 border-none p-3 rounded-md text-white "
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {currState === "Sign Up" && (
          <div className="condition flex items-start gap-2 mt-3.5 font-thin">
            <input type="checkbox" required className="mt-1" />
            <p className="text-white">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        )}

        {currState === "Login" ? (
          <p className="text-white">
            Create a new account?
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-purple-500 font-semibold cursor-pointer"
            >
              {" "}
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-white">
            Already have an account?
            <span
              onClick={() => setCurrState("Login")}
              className="text-purple-500 font-semibold cursor-pointer"
            >
              <u> Login here</u>
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
