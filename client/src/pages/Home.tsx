import React from "react";
import LeftBar from "../components/LeftBar";
import TopBar from "../components/TopBar";
import Chat from "../components/Chat";
import RightBar from "../components/RightBar";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { selectShowInfo } from "../features/sideBar/sideBarToggleSlice";
import { selectShowContact } from "../features/sideBar/contactToggleSlice";
function Home() {
  const sideBarInfo = useSelector((state: RootState) => selectShowInfo(state));
  const contactInfo  = useSelector((state:RootState)=>selectShowContact(state));
  return (
    <>
      <div className="flex h-screen">
        {contactInfo && <LeftBar/>}
        <div className="flex flex-col w-full">
          <TopBar />
          <div className="flex flex-grow">
            <Chat />

            {sideBarInfo && <RightBar />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
