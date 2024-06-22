import React, { useState } from "react";

function TopBar() {
  const [showLogout, setShowLogout] = useState(false);

  const handleUserIconClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      <div className="nav bg-black h-10 text-white w-full flex justify-end items-center border-b">
        <button className="mr-2 focus:outline-none">
          <i className="fas fa-cog"></i>
        </button>
        <button className="mr-2 focus:outline-none">
          <i className="fas fa-bell"></i>
        </button>
        <button
          className="mr-2 focus:outline-none"
          onClick={handleUserIconClick}
        >
          <i className="fas fa-user"></i>
        </button>
        {showLogout && (
          <button className="absolute right-2 top-8 mt-2 py-2 px-4 bg-violet-500 hover:bg-violet-600 rounded shadow-lg focus:outline-none active:bg-violet-700">
            Log out
          </button>
        )}
      </div>
    </>
  );
}

export default TopBar;
