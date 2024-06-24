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
          <div className="absolute right-2 top-8 mt-2 flex-col bg-violet-600">
            <div className="border-b border-black">
              <button className="py-2 px-4  hover:bg-violet-800 rounded shadow-lg focus:outline-none active:bg-violet-800">
                Profile
              </button>
            </div>
            <div>
              <button className="py-2 px-4 bg-violet-600 hover:bg-violet-800 rounded shadow-lg focus:outline-none active:bg-violet-800">
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TopBar;
