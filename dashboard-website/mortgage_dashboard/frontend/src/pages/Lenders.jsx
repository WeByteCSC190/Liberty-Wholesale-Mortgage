import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import LendersTable from "../components/TableLenders"; 
import LendersSearch from "../components/SearchLenders";
import axios from 'axios';


const Lenders =() => {
  const [dataTable, setDataTable] = useState([]);
  function getLenders() {
  const getData = () => {
    axios.get("http://localhost:8000/api/lender")
    .then(response => {
      console.log(response)
      setDataTable(response)
    }).catch(error => {
      console.log(TypeError)
    })
  }
}
  useEffect(() => {
    getLenders();
  }, []);

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
    
  ]

  const columnLink = [
    { heading: 'TPO Login', value: 'website' },
  ]
  return (
    <>
    <div className="Header">
      <Navbar />
    </div>
     <p className="Page-Title">Lenders</p>
    <div className="Content">
    <LendersSearch />
    <LendersTable 
       data={dataTable} 
       column={column} 
       columnTwo={columnTwo} 
       columnLink={columnLink}
     />
    </div>
    </>
  )
} 
export default Lenders; 
