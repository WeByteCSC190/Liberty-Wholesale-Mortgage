import axios from 'axios';
import * as React from 'react';
import Moment from 'react-moment';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";
import Loader from "../components/spinner";
import Footer from '../components/Footer';
const Borrowers = () => {
  // const testData = [
    // {
  //   fname: "Alex",
  //   lname: "Doe",
  //   email: "Alextsf@gmail.com",
  //   phone_num: "9124753123",
  //   date: "11-02-2015"
  // },
  // {
  //   fname: "Mia",
  //   lname: "Lee",
  //   email: "Mia-Lee@hotmail.com",
  //   phone_num: "75200932456",
  //   date: "11-20-2020"
  //   },
  // {
  //   fname: "James",
  //   lname: "Chu",
  //   email: "James.Chu@gmail.com",
  //   phone_num: "8883921789",
  //   date: "01-01-2019"
  // }
  // ];
  // console.log(testData)
  const [dataTable, setDataTable] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getBorrowersUrl = "http://localhost:8000/api/borrowers/";
  let testData = []
  
  function getBorrowers() {
  axios({
      method: "GET",
      url:getBorrowersUrl,
    }).then((response)=>{
      const data = response.data;
      setDataTable(data)
      testData = data;
      console.log(data)
      return data
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })
}

  useEffect(() => {
    getBorrowers();
    fetchData(searchValue, filterType).then((dataTable) => {
      setDataTable(dataTable);
      console.log(dataTable)
    })
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);


  const column = [
    { heading: 'CaseId ', value: 'caseId' },
    { heading: 'First Name', value: 'fName' },
    { heading: 'Last Name', value: 'lName' },
    { heading: 'Credit Score', value: 'creditScore' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone_num' },
    { heading: 'Date', value: 'date' },
    { heading: 'status', value: 'status' },
    {heading: 'Details', value:'Details'},
    {heading: 'AddRow', value:'AddBorrower'}
  ]

  const fetchData = (searchValue, filterType) => {
    setIsLoading(true);
    
    return new Promise((resolve) => {
         
      setTimeout(() => {
   
        if (searchValue !== '') {
          resolve(testData.filter(dataTable => dataTable.fName.toLowerCase().includes(searchValue.toLowerCase())
          ));
        }
        if (filterType !== '') {
          switch (filterType) {
            case 'First Name':
              // console.log("filter by first name")
              resolve(handleSorting("fName", 'asc'))
            case 'Last Name':
              // console.log("filter by last name")
              resolve(handleSorting("lName", 'asc'))
            case 'Date':
              // console.log("filter by date")
              // resolve(handleSortingDate())
             resolve(testData)
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
    console.log("filterTable function called")
    if (filterType !== '') {
      switch(filterType) {
        case 'First Name':
            // console.log("filter by first name")
            return handleSorting("fName", 'asc')
        case 'Last Name':
            // console.log("filter by last name")
            return handleSorting("lName", 'asc')
        case 'Date':
            // console.log("filter by date")
            // return handleSortingDate()
           
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
    <>
    <div className="Header">
      <Navbar />
    </div>
     {/* <p className="Page-Title">Borrowers</p> */}
     <div className="Content">
     <div className="Borrowers">
      
      {isLoading ?
        <Loader /> :   <div>    
          <Search 
              callback1={(searchValue)=> setSearchValue(searchValue)} 
              callback2={(filterType)=> setFilterType(filterType)}
              />
          <Table api="http://localhost:8000/api/borrowers/"  page={"Borrowers"} data={dataTable} column={column} />

          <div className="Footer">
             <Footer />
          </div>
         </div>
      }
      </div>
      </div>
      </>
  );
}

export default Borrowers;
