import * as React from 'react';
import Moment from 'react-moment';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import TableLenders from "../components/TableLenders"; 
import Table from "../components/Table";
import SearchLenders from "../components/SearchLenders";
import Search from "../components/Search";
import Footer from "../components/Footer"; 
import Loader from "../components/spinner";
import axios from 'axios';


const Lenders = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  let testData = []

    function getLenders() {
      axios.get("http://localhost:8000/api/lender/")
      .then((response) => {
        const data = response.data;
        setDataTable(data)
        testData = data;
        return data
      }
    ).catch((error => {
      console.log(error.response)
      console.log(error.response.status);
      console.log(error.response.headers);
    }))
  }
  
  useEffect(() => {
    getLenders();
    fetchData(searchValue, filterType).then((dataTable) => {
      setDataTable(dataTable);
      console.log(dataTable)
    })
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);
    

  const column = [
    { heading: 'Company', value: 'company' },
    { heading: 'State', value: 'state' },
    { heading: 'Rating', value: 'rating' },
    { heading: 'Programs', value: 'programs' },
  ]

  const columnTwo = [
    { heading: 'FHA ID', value: 'lender_FHA_ID' },
    { heading: 'VA ID', value: 'lender_VA_ID' },
    { heading: 'Account Executive', value: 'account_executive' },
    { heading: 'Phone Number', value: 'phone_num' },
    { heading: 'Email', value: 'email' },
    { heading: 'TPO Login', value: 'website' },
  ] 

  const fetchData = (searchValue, filterType) => {
    setIsLoading(true);
    
    return new Promise((resolve) => {
         
      setTimeout(() => {
   
        if (searchValue !== '') {
          resolve(testData.filter(dataTable => 
            dataTable.company.toLowerCase().includes(searchValue.toLowerCase())
          ));
        }
        if (filterType !== '') {
          switch (filterType) {
            case 'Company':
              // console.log("filter by first name")
              resolve(handleSorting("company", 'asc'))
            case 'State':
              // console.log("filter by last name")
              resolve(handleSorting("state", 'asc'))
            case 'Rating':
              resolve(handleSorting("rating", 'asc'))
              // console.log("filter by date")
              // resolve(handleSortingDate())
              case 'Programs':
                resolve(handleSorting("programs", 'asc'))
             break
             
            default:
              
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


  const filterTable = (searchValue, filterType) => {
    setIsLoading(true);
    console.log("filterTable function called")
    if (filterType !== '') {
      switch(filterType) {
        case 'Company':
            // console.log("filter by company")
            return handleSorting("company", 'asc')
        case 'State':
            // console.log("filter by state")
            return handleSorting("state", 'asc')
        case 'Rating':
            // console.log("filter by rating")
            return handleSorting("rating", 'asc')
        case 'Programs':
              // console.log("filter by programs")
              return handleSorting("programs", 'asc')
              
        default:
            return testData
      }

    } else if (searchValue === '' || filterType === '') {
      return testData
    }

    if (searchValue !== '') {
      console.log(testData.filter(dataTable => dataTable.company.toLowerCase().includes(searchValue.toLowerCase())
      ))
      return testData.filter(dataTable => dataTable.company.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setIsLoading(false);
  };
  
  return (
    <>
    <div className="Header">
      <Navbar />
    </div>
     
    <div className="Content">
     <p className="Page-Title">Lenders</p> 
    {isLoading ?
        <Loader /> :   <div>    
          <SearchLenders 
              callback1={(searchValue)=> setSearchValue(searchValue)} 
              callback2={(filterType)=> setFilterType(filterType)}
              />
          <TableLenders data={dataTable} column={column} />
        <div className="Footer">
         <Footer /></div>
        </div>
      } 
    </div>
    </>
  )
  }
export default Lenders; 
