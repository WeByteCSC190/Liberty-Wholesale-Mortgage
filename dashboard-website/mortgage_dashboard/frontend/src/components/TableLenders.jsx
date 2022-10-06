import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';


export default function LendersTable() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div style={{ paddingLeft: 90, paddingRight:90 }}>
    <Table className="Table" responsive >
      <thead>
        <tr className="table-title">List of Lenders</tr>
      <tr className="table-head">
         <td>Company</td>
         <td>State</td>
         <td>Rating</td>
         <td>Programs</td>
         <td></td>
         </tr>
      </thead>
      <tbody className= "table-body">
      
      </tbody>
      </Table>
      </div>

    </>
  );
}

const createData = (company_id, company, state, rating, programs) => {
  return { company_id, company, state, rating, programs };
}

function GetData() {
    const [quote, setQuote] = useState(' ')
    const getQuote = () => {
      axios.get('')
    }
    return (
      <>
      
      </>

    ); 
}



function ExpandButton() {
  return(
    <>
    <Button>

    </Button>
    </>
  )
}

const renderLendersList = ()  => {

}

const index = () => {
  return (
    <>
    
    </>
  );
}