import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import LoginPopup from "./components/login form/LoginPopup";
import Login from "./components/login form/Login";
import Profile from "./components/profile/Profile";
import SignUp from "./components/login form/SignUp";
import Chat from "./components/Chat";
import LeftBar from "./components/LeftBar";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import PrivateRoute from "./routes/PrivateRoute";
// import { useState } from "react";
function App() {
  const selectedContact = useSelector(
    (state: RootState) => state.contact.selectedContact
  );
  // const [showLogin, setShowLogin] = useState(false);

  return (
    
    <BrowserRouter>
      <Routes>
      <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />}></Route>
          {/* <Route
          path="/chat"
          element={!selectedContact ? <Chat /> : <LeftBar />}
        ></Route> */}

        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
