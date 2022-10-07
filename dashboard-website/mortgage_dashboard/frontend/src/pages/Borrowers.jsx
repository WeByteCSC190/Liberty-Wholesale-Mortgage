import axios from 'axios';
import * as React from 'react';
import Moment from 'react-moment';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";
import Loader from "../components/spinner";
const Borrowers = () => {
  const testData = [{
    fname: "Alex",
    lname: "Doe",
    email: "Alextsf@gmail.com",
    phone_num: "9124753123",
    date: "11-02-2015"
  },
  {
    fname: "Mia",
    lname: "Lee",
    email: "Mia-Lee@hotmail.com",
    phone_num: "75200932456",
    date: "11-20-2020"
    },
  {
    fname: "James",
    lname: "Chu",
    email: "James.Chu@gmail.com",
    phone_num: "8883921789",
    date: "01-01-2019"
  }
  ];
  // console.log(testData)
  const [dataTable, setDataTable] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // getBorrowers();
    // setDataTable([])
    fetchData(searchValue, filterType).then((dataTable) => {
      setDataTable(dataTable);
      console.log(dataTable)
    })
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue,filterType]);

  // const getBorrowersUrl = "http://localhost:8000/api/borrowers";
  // function getBorrowers() {
  // axios({
  //     method: "GET",
  //     url:getBorrowersUrl,
  //   }).then((response)=>{
  //     const data = response.data;
  //     // setDataTable(data)
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

  const fetchData = (searchValue, filterType) => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        if (searchValue !== '') {
          resolve(testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
          ));
        }
        if (filterType !== '') {
          switch (filterType) {
            case 'First Name':
              console.log("filter by first name")
              resolve(handleSorting("fname", 'asc'))
            case 'Last Name':
              console.log("filter by last name")
              resolve(handleSorting("lname", 'asc'))
            case 'Date':
              console.log("filter by date")
              resolve(handleSortingDate())
            //  return testData
            default:
              resolve(testData)
          }
        } else if (searchValue === '' || filterType === '') {
          resolve(testData)
        }
        setIsLoading(false);
      }, 1000);
    });
  };
const handleSorting = (sortField, sortOrder) => {
 if (sortField) {
  const sorted = [...dataTable].sort((a, b) => {
    return (
        a[sortField].localeCompare(b[sortField], "en", {
        numeric: true,
        }) * (sortOrder === "asc" ? 1 : -1)
    );
  });
   return sorted;
 }
};
const handleSortingDate = () => {
  const sorted = [...dataTable].sort((a, b) => {
    console.log((a.date))
    return (
        (new Moment(a.date)) - (new Moment(b.date))
    );
  });
   return sorted;
};
  const filterTable = (searchValue, filterType) => {
    setIsLoading(true);
    if (filterType !== '') {
      switch(filterType) {
        case 'First Name':
            console.log("filter by first name")
            return handleSorting("fname", 'asc')
        case 'Last Name':
            console.log("filter by last name")
            return handleSorting("lname", 'asc')
        case 'Date':
            console.log("filter by date")
            return handleSortingDate()
          //  return testData
        default:
            return testData
      }
    } else if (searchValue === '' || filterType==='') {
      return testData
    }
    if (searchValue !== '') {
      console.log(testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
      ))
      return testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setIsLoading(false);
  };
  return (
    <div className="Borrowers">
      <Navbar />
      {isLoading ?
        <Loader /> :   <div>    <Search callback1={(searchValue)=> setSearchValue(searchValue)} callback2={(filterType)=> setFilterType(filterType)}/>
          <Table data={dataTable} column={column} />
        </div>
      }
      </div>
  );
}

export default Borrowers;
