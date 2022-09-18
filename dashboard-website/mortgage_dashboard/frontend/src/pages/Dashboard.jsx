import * as React from 'react';

import Milestone from "../components/Milestone";
import RecentLeads from "../components/RecentLeads";
import RecentBorrowers from "../components/RecentBorrowers";
import AnnouncementsWidget from "../components/AnnouncementsWidget";

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
