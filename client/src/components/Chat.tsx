import React, { useState,useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import {
  selectShowInfo,
  toggleInfo,
} from "../features/sideBar/sideBarToggleSlice";
import { messages } from "../assets/message"; // Import dummy messages
import { setSelectedContact } from "../features/selectedContact/selectedContactSlice";

function Chat() {
  const showInfo = useSelector((state: RootState) => selectShowInfo(state));
  const selectedContact = useSelector(
    (state: RootState) => state.contact.selectedContact
  );
  const [searchVisible, setSearchVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();




  
  const handleBackToContacts = () => {
    dispatch(setSelectedContact(null));
  };




  const handleToggleInfo = () => {
    dispatch(toggleInfo());
  };

  const handleToggleSearch = () => {
    setSearchVisible(!searchVisible);
  };


  // for the icon effect 
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && showInfo) {
        dispatch(toggleInfo());
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();




    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, showInfo]);


// message show

  const filteredMessages = messages.filter(
    (message) =>
      message.sender_id === selectedContact?.contact_id ||
      message.receiver_id === selectedContact?.contact_id
  );

  return (
    <div className="flex flex-col h-full flex-grow">
      <div className="bg-black text-white p-2 flex items-center justify-between">
        <div className="left-arrow">
  <button onClick={handleBackToContacts}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>

          </button>
        </div>
        <div className=" flex grow-0 items-center">
          <div className="rounded-full h-11 w-11 bg-gray-400 flex items-center justify-center">
            <img
              src={selectedContact?.contact_image}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="text-sm p-2">{selectedContact?.contact_name}</div>
        </div>
        <div className="flex justify-center items-baseline">
          <div className="flex">
            {searchVisible && (
              <div className="p-2">
                <input
                  type="text"
                  className="w-full p-2 rounded-lg text-gray-900 h-6 focus:outline-none"
                  placeholder="Search messages..."
                />
              </div>
            )}
            <button
              className="mr-2 focus:outline-none"
              onClick={handleToggleSearch}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button
            className="mr-2 ml-2 rounded-full  h-7 w-7 border-white border focus:outline-none"
            onClick={handleToggleInfo}
          >
            {showInfo ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-info"></i>
            )}
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto h-96 bg-gray-200 p-2">
        {filteredMessages.map((message) => (
          <div
            key={message.message_id}
            className={`flex ${
              message.sender_id === selectedContact?.contact_id
                ? "justify-start"
                : "justify-end"
            } mb-2`}
          >
            <div
              className={`p-2 rounded-lg ${
                message.sender_id === selectedContact?.contact_id
                  ? "bg-blue-300"
                  : "bg-violet-600 text-white"
              }`}
            >
              {message.text}
              {message.attachments.length > 0 &&
                message.attachments.map((attachment, index) => (
                  <img
                    key={index}
                    src={attachment.url}
                    alt="attachment"
                    className="mt-1 rounded"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black text-white p-4 flex items-center space-x-2">
        <label
          className="bg-gray-600 p-2 rounded-md focus:outline-none flex items-center justify-center cursor-pointer"
          title="Attach file"
          aria-label="Attach file"
        >
          <i className="fas fa-paperclip"></i>
          <input type="file" className="hidden" />
        </label>
        <label
          className="bg-gray-600 p-2 rounded-md focus:outline-none flex items-center justify-center cursor-pointer"
          title="addImage"
          aria-label="addImage"
        >
          <i className="fas fa-image"></i>
          <input type="file" accept="image/*" className="hidden" />
        </label>

        <textarea
          id="chat"
          rows={1}
          className="flex-grow p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:outline-none resize-none"
          placeholder="Your message..."
        ></textarea>
        <button
          className="bg-gray-600 p-2 rounded-md text-white focus:outline-none flex items-center justify-center"
          title="Send message"
          aria-label="Send message"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>

      
    </div>
  );
}

export default Chat;
