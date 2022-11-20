import api from "../services/api";
import { useState, useEffect } from "react";
import * as React from "react";
import "./RecentLeads.css";

const RecentLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:8000/api/recentLeads/")
      .then((response) => setLeads(response.data));
  }, []);

  return (
    <div className="RecentLeads">
      <div className="RecentLeadsTitle">
        <p>Recently Added Leads</p>
      </div>
      <ol className="RecentLeadsColumnNames">
        <li>Case ID</li>
        <li>Date</li>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Phone #</li>
      </ol>
      <div className="RecentLeadsTable">
        {leads.map((row) => (
          <ol className="RecentLeadsData">
            <li>{row.caseId}</li>
            <li>{row.date.slice(0, 10)}</li>
            <li>{row.fName}</li>
            <li>{row.lName}</li>
            <li>{row.phone_num}</li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default RecentLeads;
