import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard.jsx";
import Account from "./pages/Account";
import Leads from "./pages/Leads";
import Borrowers from "./pages/Borrowers";
import Resources from "./pages/Resources";
import SignIn from "./pages/sign-in/sign-in.jsx";
import SignUp from "./pages/sign-up/sign-up.jsx";
import Lenders from "./pages/Lenders.jsx";
import Users from "./pages/Admin/Users.jsx";
import AddUser from "./pages/Admin/Add-Users.jsx";
import EditResources from "./pages/Admin/EditResources";

const App = () => {
  return (
    <div className="App">
      <div className="Header"> 
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="Account" element={<Account />} />
        <Route path="Leads" element={<Leads />} />
        <Route path="Borrowers" element={<Borrowers />} />
        <Route path="Resources" element={<Resources />} />
        <Route path="Sign-In" element={<SignIn />} />
        <Route path="Sign-Up" element={<SignUp />} />
        <Route path="Users" element={<Users />} />
        <Route path="Add-User" element={<AddUser />} />
        <Route path="Edit-Resources" element={<EditResources />} />
        <Route path="Lenders" element={<Lenders />} />
      </Routes>
      </div>

      <div className="Content">
        
      </div>

      <div className="Footer">
        <p>All Rights Reserved, Liberty Wholesale Mortgage</p>
      </div>
    </div >
  )
}

export default App;

//<div className="milestone"></div>
// <div className="recent-leads"></div>
//<div className="recent-borrowers"></div>
//<div className="announcements"></div>