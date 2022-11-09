import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from "../../components/NavbarAdmin";
import Table from "../../components/Table";
export default function Users() {
  const [dataTable, setDataTable] = useState([]);
  const getUsersUrl = "http://localhost:8000/api/borrowers/";
  function getUsers() {
  axios({
      method: "GET",
      url:getUsersUrl,
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
    getUsers();
  }, []);
  const column = [
    { heading: 'First Name', value: 'fName' },
    { heading: 'Last Name', value: 'lName' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone_num' },
    { heading: 'Date', value: 'date' },
  ]

  return (
    <>
    <div className="Header">
       <Navbar />
    </div>
    <div className="Content">
    <p className="Page-Title">View TPO</p>
       <Table page="Users" data={dataTable} column={column} />
    </div>
    </>
  );
}
