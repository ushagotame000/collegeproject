import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Chat() {
  return (
    <div className="flex flex-col h-full flex-grow">
      <div className="bg-black text-white p-2">Top Menu</div>
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
