import * as React from 'react';
import '../components/Dashboard.css';
import Navbar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import Milestone from "../components/Milestone";
import RecentLeads from "../components/RecentLeads";
import RecentBorrowers from "../components/RecentBorrowers";
import AnnouncementsWidget from "../components/AnnouncementsWidget";
// import DashboardCards from "../components/DashboardCards";
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <div className="Header">
        <Navbar />
      </div>
      <div className="Content">
        <Container className="page-style">
        <p className="Page-Title">Dashboard</p>
        <Container className="Dashboard"> 
          <Milestone />
          {/* <DashboardCards /> */}
          <RecentLeads />
          <RecentBorrowers />
          <AnnouncementsWidget />
        </Container>   
        </Container>
      </div>
      <div className="Footer">
        {/* <Footer /> */}
      </div>
      
    </>
  )
}

export default Dashboard;
