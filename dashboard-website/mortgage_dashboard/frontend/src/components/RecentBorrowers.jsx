import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const createData = (date, fname, lname) => {
  return { date, fname, lname };
}

const rows = [
  createData('03/01/21', 'Claire', 'Winchester'),
  createData('06/31/20', 'Dave', 'Crocker'),
  createData('07/11/19', 'Batman', 'NotWayne'),
];

const RecentBorrowers = () => {
  return (
    <div className="RecentBorrowers">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default RecentBorrowers;
