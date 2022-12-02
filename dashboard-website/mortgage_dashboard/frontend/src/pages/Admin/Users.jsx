import * as React from "react";
import api from "../../services/api";
import { useState, useEffect } from "react";
import Navbar from "../../components/NavbarAdmin";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";

export default function Users() {
  const [dataTable, setDataTable] = useState([]);
  const getUsersUrl = `${process.env.REACT_APP_API_URL}/accounts/users/list/`;
  function getUsers() {
    api({
      method: "GET",
      url: getUsersUrl,
    })
      .then((response) => {
        const data = response.data;
        setDataTable(response.data);
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  useEffect(() => {
    getUsers();
  }, []);
  const column = [
    { heading: "Id", value: "id" },
    { heading: "Username", value: "username" },
    { heading: "First Name", value: "fName" },
    { heading: "Last Name", value: "lName" },
    { heading: "Email", value: "email" },
    { heading: "NMLS ID", value: "nmlsId" },
    { heading: "Milestones", value: "milestone_count" },
    { heading: "Role", value: "role" },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="Header">
          <Navbar />
        </div>
        <div className="Content">
          <Container className="page-format">
            <p className="Page-Title">Manage Accounts</p>
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
