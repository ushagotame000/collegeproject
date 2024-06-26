import React, { useState } from "react";
import { assets } from "../../assets/assets";

function SignUp() {
  return (
    <>
      <div className="signup-page flex justify-center items-center h-screen bg-gray-100">
        <form className="container max-w-lg bg-black flex flex-col gap-7 rounded-xl text-base p-6 justify-center">
          <div className="signup-title flex justify-between text-center font-bold text-xl font-mono">
            <h2 className="text-white">Sign Up</h2>
            <button
              className="bg-white rounded-full h-6 w-6 flex justify-center items-center"
              onClick={() => (window.location.href = "/login")}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

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

          <div className="Password2">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
              className="border border-gray-300 p-3 rounded-sm w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 border-none p-3 rounded-md text-white"
          >
            Create account
          </button>

          <div className="condition flex items-start gap-2 mt-3.5 font-thin">
            <input type="checkbox" required className="mt-1" />
            <p className="text-white">
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>

          <p className="text-white">
            Already have an account?
            <span
              className="text-purple-600 font-semibold cursor-pointer"
              onClick={() => (window.location.href = "/login")}
            >
              <u> Login here</u>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
