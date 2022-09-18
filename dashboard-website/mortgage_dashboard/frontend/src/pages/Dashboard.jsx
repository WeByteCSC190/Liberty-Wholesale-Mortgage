import * as React from 'react';
import Navbar from "../components/Navbar"; 
import Milestone from "../components/Milestone";
import RecentLeads from "../components/RecentLeads";
import RecentBorrowers from "../components/RecentBorrowers";
import AnnouncementsWidget from "../components/AnnouncementsWidget";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navbar />
      <Milestone />
      <RecentLeads />
      <RecentBorrowers />
      <AnnouncementsWidget />
    </div>
  )
}

export default Dashboard;
