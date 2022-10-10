import * as React from 'react';
import "../components/Leads.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Leads() {
  return (
    <>
      <div className="Leads-Header">
        <Navbar />

      </div>
      <div className="Leads-Content">
        <p className="Leads-Title">Leads</p>
        <LeadsTable />
      </div>
    </>
  )
}
const LeadsTable = () => {
  function createData(cid, date, fname, lname, fico, email, phone_num, lead_status) {
    return { cid, date, fname, lname, fico, email, phone_num, lead_status };
  }

  const rows = [
    createData('234234', '03/01/21', 'Claire', 'Winchester', 159, 'claire@hotmail.uk', '916-799-0111', 3),
    createData('523449', '06/31/20', 'Dave', 'Crocker', 159, 'odd@hotmail.uk', '916-799-0111', 3),
    createData('614133', '07/11/19', 'Batman', 'NotWayne', 159, 'notwayne@hotmail.uk', '916-799-0111', 3),
    createData('902352', '01/01/18', 'Monsour', 'Friedman', 159, 'mfriedman@hotmail.uk', '916-799-0111', 3),
    createData('206949', '04/18/17', 'Jessica', 'Casa', 159, 'casa@hotmail.uk', '916-799-0111', 3),
    createData('490909', '09/21/16', 'Prenoit', 'Frenchman', 159, 'prenoitf@hotmail.uk', '916-799-0111', 3),
  ];
  return (
    <>
      <Search />
      <br />
      <div className="Leads-Table-Title">
        <p>List of Leads</p>
      </div>
      <TableContainer component={Paper} className="Leads-Table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#0d397a", fontSize: "16px" }}>
            <TableRow >
              <TableCell sx={{ color: "white" }} align="right">Case ID</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Date</TableCell>
              <TableCell sx={{ color: "white" }} align="right">First Name</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Last Name</TableCell>
              <TableCell sx={{ color: "white" }} align="right">FICO</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Email Address</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Phone Number</TableCell>
              <TableCell sx={{ color: "white" }} >Status</TableCell>
              <Button style={{
                backgroundColor: "white", color: "#2c81d5", borderColor: '#2c81d5',
                borderTopLeftRadius: "25%", borderTopRightRadius: "25%", borderBottomRightRadius: "25%",
                borderBottomLeftRadius: "25%", top: "20%", right: "50%"
              }} variant="contained" align="right"
                href="http://localhost:8000/api/leads/" className="Leads-Add-Button">+ Add Row</Button>
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
                <TableCell align="right">{row.cid}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.fname}</TableCell>
                <TableCell align="right">{row.lname}</TableCell>
                <TableCell align="right">{row.fico}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone_num}</TableCell>
                <Button variant="outlined" sx={{}}>{row.lead_status}</Button>
                <Button variant="outlined" sx={{ left: "35%" }} className="Leads-Actions-Button">Actions</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


