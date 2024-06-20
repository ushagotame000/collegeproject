import React from "react";

function RightBar() {
  return (
    <div className="bg-black text-white h-full w-60 flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center">
        <div className="rounded-full h-24 w-24 bg-gray-400 flex items-center justify-center">
          <span className="text-lg">Image</span>
        </div>
        <div className="mt-2">Contact Name</div>
      </div>
      <div className="flex flex-col w-full h-full p-2">
        <div>Medias</div>
        <div>Files</div>
      </div>
    </div>
  );
}

export default RightBar;
