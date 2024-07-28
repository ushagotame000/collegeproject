import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function RightBar() {
  const selectedContact = useSelector(
    (state: RootState) => state.contact.selectedContact
  );
  return (
    <div className="bg-black text-white h-full w-60 flex flex-col items-center justify-evenly border-s pt-2">
      <div className="flex flex-col items-center">
        <div className="rounded-full h-20 w-20 bg-gray-400 flex items-center justify-center">
          <img
            src={selectedContact?.contact_image}
            alt=""
            className="rounded-full h-full w-full object-cover"
          />
        </div>
        <div className="mt-2">{selectedContact?.contact_name}</div>
      </div>
      <div className="flex flex-col w-full h-full p-2">
        <div>Medias</div>
        <div>Files</div>
      </div>
    </div>
  );
}

export default RightBar;