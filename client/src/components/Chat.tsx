import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import {
  selectShowInfo,
  toggleInfo,
} from "../features/sideBar/sideBarToggleSlice";

function Chat() {
  const showInfo = useSelector((state: RootState) => selectShowInfo(state));
  const dispatch: AppDispatch = useDispatch();

  const handleToggleInfo = () => {
    dispatch(toggleInfo());
  };
  return (
    <div className="flex flex-col h-full flex-grow">
      <div className="bg-black text-white p-2 flex items-baseline justify-between">
        <div className=" flex grow-0 items-baseline">
          <div className="rounded-full h-11 w-11 p-3 bg-gray-400 flex items-center justify-center">
            <span className="text-sm">Image</span>
          </div>
          <div className="text-sm p-2">Contact Name</div>
        </div>
        <div>
          <button className="mr-2 focus:outline-none">
            <i className="fas fa-search"></i>
          </button>
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
      <div className="flex-grow overflow-y-auto bg-gray-200 p-2">Messages</div>
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
