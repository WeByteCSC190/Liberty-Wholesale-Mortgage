import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Leads() {
  function createData(date, fname, lname, fico, email, phone_num, lead_status) {
    return { date, fname, lname, fico, email, phone_num, lead_status };
  }

  const rows = [
    createData('03/01/21', 'Claire', 'Winchester', 159, 'claire@hotmail.uk', '916-799-0111', 3),
    createData('06/31/20', 'Dave', 'Crocker', 159, 'odd@hotmail.uk', '916-799-0111', 3),
    createData('07/11/19', 'Batman', 'NotWayne', 159, 'notwayne@hotmail.uk', '916-799-0111', 3),
    createData('01/01/18', 'Monsour', 'Friedman', 159, 'mfriedman@hotmail.uk', '916-799-0111', 3),
    createData('04/18/17', 'Jessica', 'Casa', 159, 'casa@hotmail.uk', '916-799-0111', 3),
    createData('09/21/16', 'Prenoit', 'Frenchman', 159, 'prenoitf@hotmail.uk', '916-799-0111', 3),
  ];
  return (
    <div className="Leads">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Fico Score</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Lead Status</TableCell>
              <TableCell align="right">Change Status</TableCell>
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
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.fname}</TableCell>
                <TableCell align="right">{row.lname}</TableCell>
                <TableCell align="right">{row.fico}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone_num}</TableCell>
                <TableCell align="right">{row.lead_status}</TableCell>
                <TableCell align="right">Move to Borrower</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
