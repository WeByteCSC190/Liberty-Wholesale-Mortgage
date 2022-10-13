import * as React from 'react';
import Moment from 'react-moment';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import TableLenders from "../components/TableLenders"; 
import Table from "../components/Table";
import SearchLenders from "../components/SearchLenders";
import Search from "../components/Search";
import Footer from "../components/Footer"; 
//import Loader from "../components/spinner";
import axios from 'axios';


const Lenders = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  //const [isLoading, setIsLoading] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  

    function getLenders() {
      axios.get("http://localhost:8000/api/lender/")
      .then((response) => {
        console.log(response.data)
        setDataTable(response.data)
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
   // setIsLoading(true);
    
    return new Promise((resolve) => {
         
      setTimeout(() => {
   
        if (searchValue !== '') {
          resolve(column.filter(dataTable => dataTable.company.toLowerCase().includes(searchValue.toLowerCase())
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
              resolve(column)
              break
          }
        } else if (searchValue === '' || filterType === '') {
          resolve(column)
        }
    //    setIsLoading(false);
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
   // setIsLoading(true);
    console.log("filterTable function called")
    if (filterType !== '') {
      switch(filterType) {
        case 'Company':
            // console.log("filter by first name")
            return handleSorting("company", 'asc')
        case 'State':
            // console.log("filter by last name")
            return handleSorting("state", 'asc')
        case 'Rating':
            // console.log("filter by date")
            return handleSorting("rating", 'asc')
        case 'Programs':
              // console.log("filter by date")
              return handleSorting("programs", 'asc')
              
        default:
            return column
      }

    } else if (searchValue === '' || filterType === '') {
      return column
    }

    if (searchValue !== '') {
      console.log(column.filter(dataTable => dataTable.company.toLowerCase().includes(searchValue.toLowerCase())
      ))
      return column.filter(dataTable => dataTable.company.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
 //   setIsLoading(false);
  };
  
  return (
    <>
    <div className="Header">
      <Navbar />
    </div>
     <p className="Page-Title">Lenders</p> 
    <div className="Content">
     
       <SearchLenders callback1={(searchValue)=> setSearchValue(searchValue)} callback2={(filterType)=> setFilterType(filterType)}/>
       <TableLenders data={dataTable} column={column} />
    </div>

    <div className="Footer">
      <Footer />
    </div>
    
    </>
  )
  }
export default Lenders; 
