import * as React from 'react';
import './RecentLeads.css';
import axios from "axios";


const createData = (date, fname, lname) => {
  return { date, fname, lname };
}

const rows = [
  createData('03/01/21', 'Claire', 'Winchester'),
  createData('06/31/20', 'Dave', 'Crocker'),
  createData('07/11/19', 'Batman', 'NotWayne'),
];

const requestTry = axios.get("http://localhost:8000/api/recentLeads/")

const RecentLeads = () => {
  const rows2 = requestTry.then(response => {
    console.log(response)
  }).catch(error => {
    console.log(error)
  })
  console.log(rows2)
  return (
    <div className="RecentLeads">
      <div className='RecentLeadsTitle'><p>Recently Added Leads</p></div>
      <ol className='RecentLeadsColumnNames'>
        <li>Date</li>
        <li>First</li>
        <li>Last</li>
      </ol>
      <div className="RecentLeadsTable">
        {rows.map((row) => (
          <ol className='RecentLeadsData'>
            <li>{row.date}</li>
            <li>{row.fname}</li>
            <li>{row.lname}</li>
          </ol>
        ))}
      </div>
    </div>
  );
}

export default RecentLeads;
