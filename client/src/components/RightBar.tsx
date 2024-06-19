import React from "react";

function RightBar() {
  return (
    <div className="bg-black text-white h-full w-60 flex flex-col items-center justify-evenly ">
      <div className=" flex-cols grow-0">
        <div className="rounded-full h-24 w-24 bg-gray-400 flex items-center justify-center">
          <span className="text-lg">Image</span>
        </div>
        <div>Contact Name</div>
      </div>
      <div className="flex-cols w-full h-full p-2 justify-between grow">
        <div>Medias</div>
        <div>Files</div>
      </div>
    </div>
  );
}

export default RightBar;
