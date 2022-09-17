import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Navbar from "../../components/Navbar";
import TableComponent from "../../components/Table";
export default function Users() {
  function createData(fname, lname, username, phone_num, date) {
    return { fname, lname, username, phone_num, date };
  }

  const rows = [
    createData('Claire', 'Winchester', 'claire@hotmail.uk', '916-799-0111', '03/01/21'),
    createData('Dave', 'Crocker', 'odd@hotmail.uk', '916-799-0111', '06/31/20'),
    createData('Batman', 'NotWayne', 'notwayne@hotmail.uk', '916-799-0111', '07/11/19'),
    createData('Monsour', 'Friedman', 'mfriedman@hotmail.uk', '916-799-0111', '01/01/18'),
    createData('Jessica', 'Casa', 'casa@hotmail.uk', '916-799-0111', '04/18/17'),
    createData('Prenoit', 'Frenchman', 'prenoitf@hotmail.uk', '916-799-0111', '09/21/16'),
  ];
  return (
    <div className="Borrowers">
       <Navbar />
       <TableComponent />
          </div>
  );
}
