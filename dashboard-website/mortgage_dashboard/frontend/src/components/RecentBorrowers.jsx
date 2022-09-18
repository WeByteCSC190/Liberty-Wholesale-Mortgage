import * as React from 'react';
import './RecentBorrowers.css'

const createData = (case_id, date, fname, lname, phone) =>{
    return { case_id, date, fname, lname, phone };
}

const rows = [
  createData('1000232', '03/01/21', 'Claire', 'Winchester', '9167982333'),
  createData('1000323', '06/31/20', 'Dave', 'Crocker', '9163839848'),
  createData('1000324', '07/11/19', 'Batman', 'NotWayne', '9163938484'),
];

const RecentBorrowers = () => {
  return (
    <div className="RecentBorrowers">
      <div className='RecentBorrowersTitle'>Recently Added Borrowers</div>
      <ol className='RecentBorrowersColumnsNames RecentBorrowersData'>
        <li>Case ID</li>
        <li>Date</li>
        <li>First</li>
        <li>Last</li>
        <li>Phone #</li>
      </ol>
      {rows.map((row) => (
        <ol className='RecentBorrowersData'>
          <li>{row.case_id}</li>
          <li>{row.date}</li>
          <li>{row.fname}</li>
          <li>{row.lname}</li>
          <li>{row.phone}</li>
        </ol>
      ))}
    </div>
  );
}

export default RecentBorrowers;
