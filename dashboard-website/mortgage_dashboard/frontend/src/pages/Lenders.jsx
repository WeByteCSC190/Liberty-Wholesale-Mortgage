import * as React from 'react';
import Navbar from "../components/Navbar";
import Table from "../components/Table"; 
import Search from "../components/Search";
export default function Lenders() {
  return (
    <>
     <Navbar />
     <Search />
      <Table/>
    </>
  )
}



const fillLendersData = (company_id, company_name, main_program, general_email) =>{
  return { company_id, company_name, main_program, general_email };
}

// On Lenders Mockup
// Visable Row: company_id, company_name, main_program, general_email
// Hidden Row: 



