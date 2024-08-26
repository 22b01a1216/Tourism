import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Homeque from "./components/Homeque";
import { ContactUs } from "./pages/ContactUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
{/*import DataFetcher from "./components/DataFetcher"; */} // Import DataFetcher
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/places" element={<Homeque />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        {/*<Route path="/data" element={<DataFetcher />} />  Add this route */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
