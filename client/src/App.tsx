import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import LoginPopup from "./components/login form/LoginPopup";
import Login from "./components/login form/Login";
import Profile from "./components/profile/Profile";
import SignUp from "./components/login form/SignUp";

// import { useState } from "react";
function App() {
  // const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
