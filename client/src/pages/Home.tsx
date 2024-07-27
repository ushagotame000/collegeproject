import React from "react";
import LeftBar from "../components/LeftBar";
import TopBar from "../components/TopBar";
import Chat from "../components/Chat";
import { useState,useEffect } from "react";
import RightBar from "../components/RightBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { selectShowInfo } from "../features/sideBar/sideBarToggleSlice";
import { selectShowContact } from "../features/sideBar/contactToggleSlice";
import { toggleContacts } from "../features/sideBar/contactToggleSlice";

function Home() {
  const sideBarInfo = useSelector((state: RootState) => selectShowInfo(state));
  const contactInfo  = useSelector((state:RootState)=>selectShowContact(state));
  const selectedContact = useSelector(
    (state: RootState) => state.contact.selectedContact
  );
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen && selectedContact) {
      dispatch(toggleContacts());
    }
  }, [isSmallScreen, selectedContact, dispatch]);
  return (
    <>
      <div className="flex h-screen">
        {contactInfo && <LeftBar/>}
       {selectedContact &&  <div className="flex flex-col w-full">
          <TopBar />
          <div className="flex flex-grow">
            <Chat />

            {sideBarInfo && <RightBar />}
          </div>
        </div>}
      </div>
    </>
  );
}

export default Home;
