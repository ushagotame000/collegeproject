import React from "react";

function LeftBar() {
  return (
    <>
      <div className="bg-black text-white flex-cols w-60 h-full">
        <div className="searchBar sticky">SearchBar</div>
        <div className="menu sticky">Menu</div>
        <div className="contacts">Contacts</div>
      </div>
    </>
  );
}

export default LeftBar;
