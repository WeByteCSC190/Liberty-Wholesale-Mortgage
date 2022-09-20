import * as React from 'react';
import Navbar from "../components/Navbar";
import Table from "../components/Table"; 

export default function Lenders() {
  return (
    <>
     <Navbar />
      <p> lenders</p>
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



