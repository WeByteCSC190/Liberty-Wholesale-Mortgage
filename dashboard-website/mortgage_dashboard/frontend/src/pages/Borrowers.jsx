import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";
const Borrowers = () => {
  const [dataTable, setDataTable] = useState([]);
  const getBorrowersUrl = "http://localhost:8000/api/borrowers";
  function getBorrowers() {
  axios({
      method: "GET",
      url:"http://localhost:8000/api/borrowers/",
    }).then((response)=>{
      const data = response.data;
      setDataTable(response.data)
     console.log(response)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })}
  useEffect(() => {
    getBorrowers();
  }, []);
  const column = [
    { heading: 'First Name', value: 'fname' },
    { heading: 'Last Name', value: 'lname' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone_num' },
    { heading: 'Date', value: 'date' },
  ]

  return (
    <div className="Borrowers">
      <Navbar />
      <Search url={getBorrowersUrl} />
      <Table data={dataTable} column={column}/>
      </div>
  );
}

export default Borrowers;
