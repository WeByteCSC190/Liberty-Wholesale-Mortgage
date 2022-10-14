import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import './RecentLeads.css';


// const createData = (date, fname, lname) => {
//   return { date, fname, lname };
// }

// const rows = [
//   createData('03/01/21', 'Claire', 'Winchester'),
//   createData('06/31/20', 'Dave', 'Crocker'),
//   createData('07/11/19', 'Batman', 'NotWayne'),
// ];

const requestTry = axios.get("http://localhost:8000/api/recentLeads/")

const RecentLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/recentLeads/")
      .then(response => setLeads(response.data))
  }, [])

  // const rows2 = requestTry.then(response => {
  //   console.log(response)
  // }).catch(error => {
  //   console.log(error)
  // })
  // console.log(rows2)
  return (
    <div className="RecentLeads">
      <div className='RecentLeadsTitle'><p>Recently Added Leads</p></div>
      <ol className='RecentLeadsColumnNames'>
        <li>Case ID</li>
        <li>Date</li>
        <li>First</li>
        <li>Last</li>
        <li>Phone #</li>
      </ol>
      <div className="RecentLeadsTable">
        {leads.map((row) => (
          <ol className='RecentLeadsData'>
            <li>{row.case_id}</li>
            <li>{row.date}</li>
            <li>{row.fName}</li>
            <li>{row.lName}</li>
            <li>{row.phone}</li>
          </ol>
        ))}
      </div>
    </div>
  );
}

export default RecentLeads;
