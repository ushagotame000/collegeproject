import React from "react";
import LeftBar from "../components/LeftBar";
import TopBar from "../components/TopBar";
import Chat from "../components/Chat";
import RightBar from "../components/RightBar";

function Home() {
  return (
    <>
      <div className="flex h-screen">
        <LeftBar />
        <div className="flex flex-col w-full">
          <TopBar />
          <div className="flex flex-grow">
            <Chat />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
