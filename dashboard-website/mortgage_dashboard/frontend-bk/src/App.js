import React from "react"
import Navbar from "./components/Navbar"
import Account from "./components/Account"
import Borrowers from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
import Leads from "./components/Leads"
import LogIn from "./components/LogIn"
import LogOut from "./components//LogOut"
import Resources from "./components/Resources"
import SignUp from "./components/SignUp"
import Milestone from "./components/Milestone.js"

export default function App() {
  return (
    <div>
      <Navbar />
      <Resources />
      <Footer />
    </div >
  )
}
