import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard.jsx";
import Account from "./components/Account";
import Leads from "./components/Leads";
import Borrowers from "./components/Borrowers";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="App">
      <div className="Header"></div>
      <Navbar />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="Account" element={<Account />} />
        <Route path="Leads" element={<Leads />} />
        <Route path="Borrowers" element={<Borrowers />} />
        <Route path="Resources" element={<Resources />} />
      </Routes>
      <div className="Content">
        <div className="milestone"></div>
        <div className="recent-leads"></div>
        <div className="recent-borrowers"></div>
        <div className="announcements"></div>
      </div>
      <div className="Footer">
        <p>All Rights Reserved, Liberty Wholesale Mortgage</p>
      </div>
    </div >
  )
}

export default App;
