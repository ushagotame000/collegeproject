import React from "react";

function Chat() {
  return (
    <div className="flex flex-col h-full flex-grow">
      <div className=" bg-black text-white p-2">Top Menu</div>
      <div className="flex-grow overflow-y-auto bg-gray-200 p-2">Messages</div>
      <div className="bg-black text-white p-4">Send</div>
    </div>
  );
}

export default Chat;
