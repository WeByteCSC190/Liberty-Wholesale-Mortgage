import * as React from 'react';
import '../components/Dashboard.css';
import Navbar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Milestone from "../components/Milestone";
import RecentLeads from "../components/RecentLeads";
import RecentBorrowers from "../components/RecentBorrowers";
import AnnouncementsWidget from "../components/AnnouncementsWidget";
// import DashboardCards from "../components/DashboardCards";
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
    <div className="page-wrapper">
      <div className="Header">
        <Navbar />
      </div>
      <div className="Content">
        <Container className="page-style">
            <p className="Page-Title">Dashboard</p>
            <Row className="blkMilestone">
            <Milestone />
            </Row>
        <Container className="Dashboard"> 
          {/* <DashboardCards /> */}
         
          <RecentLeads />
          <RecentBorrowers />
          <AnnouncementsWidget />
        </Container>   
        </Container>
      </div>
      <div className="Footer">
        <Footer /> 
      </div>
      </div>
    </>
  )
}

export default Dashboard;
