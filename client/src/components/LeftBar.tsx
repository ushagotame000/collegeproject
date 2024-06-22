import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const contacts = [
  { id: 1, name: "Contact 1", message: "Message preview 1" },
  { id: 2, name: "Contact 2", message: "Message preview 2" },
  { id: 3, name: "Contact 3", message: "Message preview 3" },
  { id: 4, name: "Contact 4", message: "Message preview 4" },
  { id: 5, name: "Contact 5", message: "Message preview 5" },
  { id: 6, name: "Contact 6", message: "Message preview 6" },
  { id: 7, name: "Contact 7", message: "Message preview 7" },
  { id: 8, name: "Contact 8", message: "Message preview 8" },
  { id: 9, name: "Contact 9", message: "Message preview 9" },
  { id: 10, name: "Contact 10", message: "Message preview 10" },
  // Add more contacts as needed
];

function LeftBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeContactId, setActiveContactId] = useState<number | null>(null);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleContactClick = (id: number) => {
    setActiveContactId(id);
  };

  return (
    <div className="bg-black text-white flex-col flex-grow w-80 p-2 border-e">
      <div className="searchBar relative mb-2 m-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className="fas fa-search text-white"></i>
        </div>
        <input
          type="text"
          name="searchContact"
          id="searchContact"
          className="w-full pl-9 pr-3 py-2 rounded-2xl bg-gray-400 h-9 placeholder:text-white text-sm focus:outline-none"
          placeholder="Search Contacts..."
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
              <i
                className={`fas ${
                  dropdownOpen ? "fa-times" : "fa-sort"
                } text-sm`}
              ></i>
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
      <div className="contacts flex flex-col flex-grow overflow-y-auto h-4/5">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact flex p-2 rounded cursor-pointer ${
              activeContactId === contact.id
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`}
            onClick={() => handleContactClick(contact.id)}
          >
            <div className="rounded-full h-11 w-11 bg-gray-400 flex items-center justify-center">
              <span className="text-xs">Image</span>
            </div>
            <div className="ml-2">
              <span>{contact.name}</span>
              <div className="text-xs">{contact.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
