import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function LeftBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="bg-black text-white flex-col w-80 h-full p-5">
        <div className="searchBar relative mb-2">
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
        <div className="menu mb-1 flex justify-between items-center">
          <div className="text-lg">Chats</div>
          <div className="flex space-x-2">
            <button className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none">
              <i className="fas fa-plus text-sm"></i>
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none"
              >
                {dropdownOpen ? (
                  <i className="fas fa-times text-sm"></i>
                ) : (
                  <i className="fas fa-sort text-sm"></i>
                )}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-400 text-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a
                      href="."
                      className="block px-4 py-2 text-sm hover:bg-gray-600"
                    >
                      Recent First
                    </a>
                    <a
                      href="."
                      className="block px-4 py-2 text-sm hover:bg-gray-600"
                    >
                      Unread First
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="contacts">Contacts</div>
      </div>
    </>
  );
}

export default LeftBar;
