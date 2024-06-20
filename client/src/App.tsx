import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPopup from "./components/login form/LoginPopup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<LoginPopup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
