import React, { useMemo, useEffect, useState } from 'react';
import MOCK_DATA from "./MOCK_DATA.json"

const DisplayData = MOCK_DATA.map(
  (info) => {
    return (
      <tr>
        <td>{info.first_name}</td>
        <td>{info.last_name}</td>
        <td>{info.status}</td>
        <td>{info.email}</td>
        <td>{info.credit_score}</td>
        <td>{info.date}</td>
        <td>{info.phone_num}</td>
      </tr>
    )
  }
)

const divStyle = {
  overflowY: 'scroll',
  overflowX: 'scroll',
  border: '1 px solid black',
  height: '100%',
  float: 'left',
  width: '100%',
  position: 'relative',
};

const Leads = () => {
  const [leadsData, setLeadsData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/leads-list/')
      .then(response => response.json())
      .then(data => {
        setLeadsData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div style={divStyle}>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Status</th>
            <th>Email</th>
            <th>Credit Score</th>
            <th>Date</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </table>
    </div >
  );

};
// }

export default Leads;
