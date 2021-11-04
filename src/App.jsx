import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Topbar from "./Components/topbar/Topbar";
import Home from "../src/Components/pages/home/Home";
import Cart from "../src/Components/pages/cart/Cart";
import Signup from "../src/Components/pages/signup/Signup";
import Login from "../src/Components/pages/login/Login";
function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
