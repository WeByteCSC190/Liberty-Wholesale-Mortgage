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
    // Notes Data
   const [dataNotes, setDataNotes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getBorrowersUrl = `${process.env.REACT_APP_API_URL}/api/borrowers/`;

  let testData = []
  
  function getBorrowers() {
  axios({
      method: "GET",
      url:getBorrowersUrl,
    }).then((response)=>{
      const data = response.data;
      setDataTable(data)
      testData = data;
      // console.log(data)
      return data
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })
    const getBorrowersNotes = `${process.env.REACT_APP_API_URL}/api/get-borrowernote`;
    axios({
      method: "GET",
      url:getBorrowersNotes,
    }).then((response)=>{
      const notes = response.data;
      setDataNotes(notes)
      // notes.map((note) =>
      // {if(note.borrower === caseId) {
        
      // }})
      // testData = data;
      
      // return data
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
      // console.log(dataTable)
    })
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);


  const column = [
    { heading: 'Case ID', value: 'caseId' },
    { heading: 'Date', value: 'date' },
    { heading: 'First Name', value: 'fName' },
    { heading: 'Last Name', value: 'lName' },
    { heading: 'Credit Score', value: 'creditScore' },
    { heading: 'Phone', value: 'phone_num' },
    { heading: 'Email', value: 'email' },
    { heading: 'Status', value: 'status' },
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
            case 'First Name ASC':
              resolve(handleSorting("fName", 'asc'))
              break
            case 'First Name Desc':
              resolve(handleSorting("fName", 'desc'))
              break
            case 'Last Name ASC':
              resolve(handleSorting("lName", 'asc'))
              break
            case 'Last Name DESC':
              resolve(handleSorting("lName", 'desc'))
              break
            case 'Status ASC':
              resolve(handleSorting("status", 'asc'))
              break
            case 'Status DESC':
              resolve(handleSorting("status", 'desc'))
              break
            case 'Date ASC':
              resolve(handleSortingDate())
              break
            case 'Date DESC':
              resolve(handleSortingDate())
              break
            default:
               window.location.reload(false);
              break
          }
        } else if (searchValue === '' || filterType === '') {
          resolve(testData)
        }
        setIsLoading(false);
      }, 1000);
    });
  };
const handleSorting = (sortField, sortOrder) => {
   console.log("handlesort sort field = "+sortOrder)
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
    console.log( (new Moment(a.date.slice(0, 10))) - (new Moment(b.date.slice(0, 10))))
    return (
        (new Moment(a.date.slice(0, 10))) - (new Moment(b.date.slice(0, 10)))
    );
  });
   return sorted;
};
  const filterTable = (searchValue, filterType) => {
    setIsLoading(true);
    if (filterType !== '') {
      switch (filterType) {
            case 'First Name ASC':
              return handleSorting("fName", 'asc')
            case 'First Name Desc':
              return handleSorting("fName", 'desc')
            case 'Last Name ASC':
              return handleSorting("lName", 'asc')
            case 'Last Name DESC':
              return handleSorting("lName", 'desc')
            case 'Status ASC':
              return handleSorting("status", 'asc')
            case 'Status DESC':
              return handleSorting("status", 'desc')
            case 'Date ASC':
              return handleSortingDate()
            case 'Date DESC':
              return handleSortingDate()
            default:
              window.location.reload(false);
              
          }
    } else if (searchValue === '' || filterType==='') {
      return testData
    }
    if (searchValue !== '') {
      // console.log(testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
      // ))
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
     <p className="Page-Title">Borrowers</p> 
     <div className="Borrowers">
      
      {isLoading ?
        <Loader /> :   <div>    
          <Search 
              callback1={(searchValue)=> setSearchValue(searchValue)} 
              callback2={(filterType)=> setFilterType(filterType)}
              />
          <Table api="http://localhost/api/borrowers/"  page={"Borrowers"} data={dataTable} column={column} notes={dataNotes} />

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
