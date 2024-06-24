import React, { useState } from "react";

function TopBar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleUserIconClick = () => {
    setShowOptions(!showOptions);
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
        {showOptions && (
          <div className="absolute right-2 top-8 mt-2  bg-transparent   bg-violet-500 rounded shadow-lg">
            <button className="block w-full text-left py-2 px-4 hover:bg-violet-600 rounded focus:outline-none">
              Profile
            </button>
            <button className="block w-full text-left py-2 px-4 mt-2  hover:bg-violet-600 rounded focus:outline-none">
              Log out
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default TopBar;
