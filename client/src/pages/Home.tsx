import React from "react";
import LeftBar from "../components/LeftBar";
import TopBar from "../components/TopBar";
import Chat from "../components/Chat";
import RightBar from "../components/RightBar";
function Home() {
  return (
    <>
      <div className="flex justify-between h-screen">
        <LeftBar></LeftBar>
        <div className="s flex-col w-full h-full">
          <TopBar />
          <div className="flex w-full justify-between">
            <Chat />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
