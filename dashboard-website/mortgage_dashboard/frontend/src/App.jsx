import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Account from "./pages/Account";
import Leads from "./pages/Leads";
import Borrowers from "./pages/Borrowers";
import Resources from "./pages/Resources";
import SignIn from "./pages/sign-in/sign-in.jsx";
import Help from "./pages/sign-in/help.jsx";
import Lenders from "./pages/Lenders";
import Terms from "./components/legal/terms.jsx";
import Privacy from "./components/legal/privacy.jsx";
import LegalThree from "./components/legal/LegalThree";
import LegalFour from "./components/legal/LegalFour.jsx";
import AddUser from "./pages/Admin/Add-Users.jsx";
import Users from "./pages/Admin/Users.jsx";
import LendersAdmin from "./pages/Admin/EditLenders";
import ResourcesAdmin from "./pages/Admin/EditResources";
import Deleted from "./pages/Admin/Deleted";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider, useSelector } from "react-redux";
import store from "./app/store.js";
import ProtectedRoutes from "./utils/ProtectedRoutes";
// import Layout from "./hocs/layout";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="Sign-In" element={<SignIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="Account" element={<Account />} />
            <Route path="Leads" element={<Leads />} />
            <Route path="Borrowers" element={<Borrowers />} />
            <Route path="Resources" element={<Resources />} />
            <Route path="Help" element={<Help />} />
            <Route path="Terms" element={<Terms />} />
            <Route path="Privacy" element={<Privacy />} />
            <Route path="LegalThree" element={<LegalThree />} />
            <Route path="LegalFour" element={<LegalFour />} />
            <Route path="Users" element={<Users />} />
            <Route path="LendersAdmin" element={<LendersAdmin />} />
            <Route path="ResourcesAdmin" element={<ResourcesAdmin />} />
            <Route path="Add-User" element={<AddUser />} />
            <Route path="Lenders" element={<Lenders />} />
            <Route path="Deleted" element={<Deleted />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;

<Route path="Add-User" element={<AddUser />} />;
//<div className="milestone"></div>
// <div className="recent-leads"></div>
//<div className="recent-borrowers"></div>
//<div className="announcements"></div>
