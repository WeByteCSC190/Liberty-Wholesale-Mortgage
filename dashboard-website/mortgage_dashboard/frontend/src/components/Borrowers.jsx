import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Borrowers() {
  function createData(fname, lname, email, phone_num, date) {
    return { fname, lname, email, phone_num, date };
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row"> */}
                {/*   {row.name} */}
                {/* </TableCell> */}
                <TableCell align="right">{row.fname}</TableCell>
                <TableCell align="right">{row.lname}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone_num}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>    </div>
  );
}
