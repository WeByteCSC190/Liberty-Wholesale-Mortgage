import * as React from 'react';
import './DashboardCards.css'

const DashboardCards = () => {
  return (
    <div className="DashboardCards">
      <div className="card">
        <p className="CardTitle">New Leads</p>
        <p className="CardFilter">last 7 days^</p>
        <p className="CardValue">10</p>
      </div>
      <div className="card">
        <p className="CardTitle">Application Submitted</p>
        <p className="CardFilter">last 7 days^</p>
        <p className="CardValue">3</p>
      </div>
      <div className="card">
        <p className="CardTitle">New Borrowers</p>
        <p className="CardFilter">last 7 days^</p>
        <p className="CardValue">6</p>
      </div>
      <div className="card">
        <p className="CardTitle">Needs Attention</p>
        <p className="CardFilter">last 7 days^</p>
        <p className="CardValue">5</p>
      </div>
    </div>
  );
}

export default DashboardCards;


