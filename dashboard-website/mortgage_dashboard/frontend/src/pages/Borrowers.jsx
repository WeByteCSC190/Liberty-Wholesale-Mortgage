import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";
const Borrowers = () => {
  const testData = [{
    fname: "Alex",
    lname: "test1",
    email: "test1",
    phone_num: "123",
    date: "11/2/2022"
  },
  {
    fname: "Mia",
    lname: "test2",
    email: "test2",
    phone_num: "456",
    date: "11/2/2022"
    },
  {
    fname: "James",
    lname: "test3",
    email: "test3",
    phone_num: "789",
    date: "11/2/2022"
  }
  ];
  console.log(testData)
  const [dataTable, setDataTable] = useState(testData);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const filteredData = filterTable(searchValue);
    setDataTable(filteredData);
  }, [searchValue]);

  // const getBorrowersUrl = "http://localhost:8000/api/borrowers";
  // function getBorrowers() {
  // axios({
  //     method: "GET",
  //     url:getBorrowersUrl,
  //   }).then((response)=>{
  //     const data = response.data;
  //     setDataTable(data)
  //    console.log(data)
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.log(error.response);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //       }
  //   })}
  // useEffect(() => {
  //   getBorrowers();
  // }, []);
  const column = [
    { heading: 'First Name', value: 'fname' },
    { heading: 'Last Name', value: 'lname' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone_num' },
    { heading: 'Date', value: 'date' },
  ]
  const filterTable = searchValue => {
    if (searchValue === '') {
      return testData
    }
    return testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
    );
  };
  return (
    <div className="Borrowers">
      <Navbar />
      <Search callback={(searchValue)=> setSearchValue(searchValue)}/>
      <Table data={dataTable} column={column}/>
      </div>
  );
}

export default Borrowers;
