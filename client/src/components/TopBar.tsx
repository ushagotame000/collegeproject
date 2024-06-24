import React, { useState } from "react";

function TopBar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleUserIconClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <div className="nav bg-black h-10 text-white w-full flex justify-between border-b">
      <div className="searchBar relative mb-2 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <i className="fas fa-search text-white"></i>
          </div>
          <input
            type="text"
            name="searchContact"
            id="searchContact"
            className="w-full pl-9 pr-3 py-2 rounded-2xl bg-gray-400 h-9 placeholder:text-white text-sm focus:outline-none"
            placeholder="Search Contacts...."
            
          />
        </div>
    
    <div className="2">

      
  
      {/* setting icon */}
      
        <button className="mr-2 focus:outline-none">
          <i className="fas fa-cog"></i>
        </button>

        {/* notification icon */}
        <button className="mr-2 focus:outline-none">
          <i className="fas fa-bell"></i>
        </button>

        {/* usericon with dropdown */}
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
      </div>
    </>
  );
}

export default TopBar;
