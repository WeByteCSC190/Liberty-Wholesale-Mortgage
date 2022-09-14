import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const createData = (date, fname, lname, lead_status) =>{
    return { date, fname, lname, lead_status };
}

const rows = [
  createData('03/01/21', 'Claire', 'Winchester', 3),
  createData('06/31/20', 'Dave', 'Crocker', 3),
  createData('07/11/19', 'Batman', 'NotWayne', 3),
];

const RecentLeads = () => {
  return (
    <div className="RecentLeads">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Lead Status</TableCell>
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
                <TableCell align="right">{row.lead_status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RecentLeads;
