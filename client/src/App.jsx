import React, { useState } from 'react';

import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Community_Forum from "./pages/Community_Forum";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Register_Complaints from "./pages/Register_Complaints";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ListOfComplaints from './pages/ListOfComplaints.jsx'

import GeneralPage from './pages/GeneralPage';
import TipPage from './pages/TipPage';
import EventPage from './pages/EventPage';
import EmergencyPage from './pages/EmergencyPage';
import { AuthContext } from './context/AuthContext.jsx';


const App = () => {

  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <AuthContext.Provider value={{isLoggedIn, setLogIn}}>
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/register_complaints"
            element={<Register_Complaints />}
          />
          <Route path="/community_forum" element={<Community_Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path = "/list_of_complaints" element = {<ListOfComplaints />} />

          <Route path="/community_forum/general" element={<GeneralPage />} />
          <Route path="/community_forum/tip" element={<TipPage />} />
          <Route path="/community_forum/event" element={<EventPage />} />
          <Route path="/community_forum/emergency" element={<EmergencyPage />} />
          
        </Routes>
      </Router>
    </main>
    </AuthContext.Provider>
  );
};
export default App;
