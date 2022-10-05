import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from "../../components/NavbarAdmin";
import Table from "../../components/Table";
export default function Users() {
  const [dataTable, setDataTable] = useState([]);
  const getBorrowersUrl = "http://localhost:8000/api/borrowers";
  function getBorrowers() {
  axios({
      method: "GET",
      url:getBorrowersUrl,
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
       <Table data={dataTable} column={column}/>
          </div>
  );
}
