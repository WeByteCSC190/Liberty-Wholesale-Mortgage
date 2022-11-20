import axios from 'axios';
import * as React from 'react';
import Moment from 'react-moment';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";
import Loader from "../components/spinner";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';


const Leads = () => {
  const [dataTable, setDataTable] = useState([]);
   // Notes Data
  const [dataNotes, setDataNotes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getLeadsUrl = `${process.env.REACT_APP_API_URL}/api/leads/`;
  let testData = []
  
  function getLeads() {
  axios({
      method: "GET",
      url:getLeadsUrl,
    }).then((response)=>{
      const data = response.data;
      setDataTable(data)
      testData = data;
      return data
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })
     const getLeadsNotes = `${process.env.REACT_APP_API_URL}/api/leadnote-list/`;
    axios({
      method: "GET",
      url:getLeadsNotes,
    }).then((response)=>{
      const notes = response.data;
      setDataNotes(notes)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })
}

  useEffect(() => {
    getLeads();
    fetchData(searchValue, filterType).then((dataTable) => {
      setDataTable(dataTable);
      console.log(dataTable)
    })
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);


  const column = [
    { heading: 'Case ID ', value: 'caseId' },
    { heading: 'Date', value: 'date' },
    { heading: 'First Name', value: 'fName' },
    { heading: 'Last Name', value: 'lName' },
    { heading: 'Credit Score', value: 'creditScore' },
    { heading: 'Phone', value: 'phone_num' },
    { heading: 'Email', value: 'email' },
    { heading: 'Status', value: 'status' },
    {heading: 'Details', value:'Details'},
    {heading: 'AddRow', value:'AddLead'}
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
            case 'Date':
              // console.log("filter by date")
              // resolve(handleSortingDate())
             resolve(testData)
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
           window.location.reload(false);
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
    <div className="page-wrapper">
    <div className="Header">
      <Navbar />
    </div>
     <div className="Content">
     <Container class="page-format">
       <p className="Page-Title">Leads</p> 
      {isLoading ?
        <Loader /> :   <div>    
          <Search 
              callback1={(searchValue)=> setSearchValue(searchValue)} 
              callback2={(filterType)=> setFilterType(filterType)}
              />
          <Table api="http://localhost:8000/api/leads/" page={"Leads"} data={dataTable} column={column} notes={dataNotes} />
         </div>
      }
      </Container>
      </div> 
      <div className="Footer">
        {isLoading ? 
        <Loader />: <div>
             <Footer />
        </div>
        }
        </div>
        </div>
      </>
  );
}

export default Leads;
