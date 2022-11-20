import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from "../../components/NavbarAdmin";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import Container from 'react-bootstrap/Container';

export default function Users() {
  const [dataTable, setDataTable] = useState([]);
  const getUsersUrl = `${process.env.REACT_APP_API_URL}/api/borrowers/`;
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
    <div className="page-wrapper">
    <div className="Header">
       <Navbar />
    </div>
    <div className="Content">
     <Container className="page-format">
    <p className="Page-Title">View TPO</p>
       <Table page="Users" data={dataTable} column={column} />
       </Container>
    </div>
    <div className="Footer">
        <Footer />
        </div>
        </div>
    </>
  );
}
