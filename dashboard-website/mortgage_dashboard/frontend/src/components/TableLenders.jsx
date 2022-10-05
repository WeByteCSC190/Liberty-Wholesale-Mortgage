
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';



export default function LendersTable() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div style={{ paddingLeft: 90, paddingRight:90 }}>
    <Table className="Table" responsive >
      <thead>
      <tr className="table-head">
          <th>#</th>
          {Array.from({ length: 4 }).map((_, index) => (
            <th key={index}>Table heading</th>
            
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 4 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 4 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 4 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
      </Table>
      </div>

    </>
  );
}

/*
 <div style={{ paddingLeft: 90, paddingRight:90 }}>
    <Table className="Table" responsive >
      
    <thead>
       /* <tr className="table-title"><th>List of Lenders</th></tr>
        <tr className="table-head">
          <th>#</th>
          <th>Company</th>
          <th>State</th>
          <th>Rating</th>
          <th>Programs</th>
        </tr>
      </thead> 
    </Table>
    </div>
*/

const index = () => {
  return (
    <>
    
    </>
  );
}