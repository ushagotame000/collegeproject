import React from "react";

function TopBar() {
  return (
    <>
      <div className="nav bg-black h-10 text-white w-full flex justify-end items-center">
        <button className="mr-2 focus:outline-none">
          <i className="fas fa-cog"></i>
        </button>
        <button className="mr-2 focus:outline-none">
          <i className="fas fa-bell"></i>
        </button>
        <button className="mr-2 focus:outline-none">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </>
  );
}

export default TopBar;
