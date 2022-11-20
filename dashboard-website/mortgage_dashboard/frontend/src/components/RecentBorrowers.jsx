import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import './RecentBorrowers.css'

const RecentBorrowers = () => {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/recentBorrowers/`)
      .then(response => setBorrowers(response.data))
  }, [])

  return (
    <div className="RecentBorrowers">
      <div className='RecentBorrowersTitle'>Recently Added Borrowers</div>
      <ol className='RecentBorrowersColumnNames'>
        <li>Case ID</li>
        <li>Date</li>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Phone #</li>
      </ol>
      <div classNaame='RecentBorrowersTable'>
        {borrowers.map((row) => (
          <ol className='RecentBorrowersData'>
            <li>{row.caseId}</li>
            <li>{(row.date).slice(0,10)}</li>
            <li>{row.fName}</li>
            <li>{row.lName}</li>
            <li>{row.phone_num}</li>
          </ol>
        ))}
      </div>
    </div>
  );
}

export default RecentBorrowers;
