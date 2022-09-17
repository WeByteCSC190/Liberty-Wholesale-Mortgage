import * as React from 'react';
import './Dashboard.css';
import Milestone from "./Milestone";
import RecentLeads from "./RecentLeads"
import RecentBorrowers from "./RecentBorrowers"
import AnnouncementsWidget from "./AnnouncementsWidget"

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Milestone />
      <RecentLeads />
      <RecentBorrowers />
      <AnnouncementsWidget />
    </div>
  )
}

export default Dashboard;
