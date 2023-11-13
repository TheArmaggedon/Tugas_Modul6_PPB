import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { HiBookOpen, HiDesktopComputer, HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'

// Pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile"
import Detail from "./pages/Detail"


// Components
import Header from "./components/header";


import "./App.css";


function App() {
  return (

  <BrowserRouter>
    <Header />
    <Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/detail/:id" element={<Detail />} />
  <Route path="/profile" element={<Profile />} />

  </Routes>
    <div className="App">
      
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" /> Home
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
      
    </div>
    </BrowserRouter>
  );
}


export default App;
