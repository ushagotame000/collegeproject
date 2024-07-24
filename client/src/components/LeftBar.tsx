import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { contact_list } from "../assets/assets";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { setSelectedContact } from "../features/selectedContact/selectedContactSlice";
interface Contact {
  contact_id: string;
  contact_name: string;
  contact_image: string;
}

function LeftBar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeContact, setActiveContact] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleContactClick = (contact: Contact) => {
    setActiveContact(contact.contact_id);
    dispatch(setSelectedContact(contact));
  };

  return (
    <>
      <div className="bg-black text-white flex-col w-80 h-full p-5 hidden lg:block md:block">
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

        {/* section 2 */}

        <div className="menu mb-1 flex justify-between items-center">
          <div className="text-lg hidden sm:block">Chats</div>
          <div className="flex space-x-2">
            {/* icon add */}

            <button className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none">
              <i className="fas fa-plus text-sm"></i>
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 focus:outline-none"
              >
                {/* icon dropdown */}

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

        {/* show message list */}

        <div className="contact_list  h-5/6 overflow-y-auto text-white">
          {contact_list.map((contact: Contact) => (
            <div
              key={contact.contact_id}
              className={`contact flex items-center p-2  cursor-pointer rounded-md hover:bg-slate-400 ${
                activeContact === contact.contact_id ? " bg-violet-600" : ""
              }`}
              onClick={() => handleContactClick(contact)}
            >
              <div
                className={`w-10 h-10 rounded-full mr-3  ${
                  activeContact === contact.contact_id
                    ? "ring-2 ring-blue-400"
                    : ""
                }`}
              >
                <img
                  src={contact.contact_image}
                  alt={contact.contact_name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <div>
                <span className="hidden sm:block  font-thin md:font-medium lg:text-lg">
                  {contact.contact_name}
                </span>
                <div className="hidden sm:block">Message</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LeftBar;
