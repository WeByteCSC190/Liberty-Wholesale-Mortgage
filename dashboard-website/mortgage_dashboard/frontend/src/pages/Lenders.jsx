import * as React from 'react';
import Navbar from "../components/Navbar";
import LendersTable from "../components/TableLenders"; 
import Table from "../components/Table"; 
import SearchLenders from "../components/SearchLenders";
import Search from "../components/Search";
export default function Lenders() {
  return (
    <>
    <div className="Header">
      <Navbar />
      <p className="Page-Title">Lenders</p>
    </div>
    <div className="Content">
     <SearchLenders />
     <LendersTable />
    </div>
    </>
  )
}



const fillLendersData = (company_id, company_name, main_program, general_email) =>{
  return { company_id, company_name, main_program, general_email };
}

// On Lenders Mockup
// Visable Row: company_id, company_name, main_program, general_email
// Hidden Row: 



