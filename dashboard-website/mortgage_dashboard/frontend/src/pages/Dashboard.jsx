import * as React from 'react';
import '../components/Dashboard.css';
import Navbar from "../components/Navbar"; 
import Milestone from "../components/Milestone";
import RecentLeads from "../components/RecentLeads";
import RecentBorrowers from "../components/RecentBorrowers";
import AnnouncementsWidget from "../components/AnnouncementsWidget";
import DashboardCards from "../components/DashboardCards"

const Dashboard = () => {
  return (
    <>
    <div className="Header">
      <Navbar />
      <p className="Page-Title">Dashboard</p>
    </div>
    <div className="Content"> 
      <div className="Dashboard">
      <Milestone />
      <DashboardCards />
      <RecentLeads />
      <RecentBorrowers />
      <AnnouncementsWidget />
    </div>
    </div>
    </>
  )
}

export default Dashboard;
