import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';



const LendersTableComponent = ({ data, column }) => {

 /* function ExpandRow(columnTwo, columnLink) {
    const [isExpanded, setExpand] = useState(false)
    
    return(
      <>
      <Button className="Lenders-Toggle" 
        onClick={() => setExpand(!isExpanded)}>
        Toggle</Button>
      </>
    )

  } 

  const numberResults = 16
  const totalResults = 20 */

  return (
    <div style={{ paddingLeft: 90, paddingRight:90 }}>

    <Table className="Table" responsive hover>
      <thead>
        <tr className="table-title">List of Lenders</tr>
        <tr className="table-heading">
          {column.map((item, index) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
         {data.map((item, index) => <TableRow item={item} column={column} />)}
         
      </tbody>
      <tr className="last-table-row">Showing {data.length} out of {data.length} results </tr>
      </Table>
      </div>
  );
}
const TableHeadItem = ({ item }) => 
  <th>{item.heading}</th>
  const TableRow = ({ item, column }) => (
    <tr className="table-row">
      {column.map((columnItem, index) => {
  
        if(columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.') //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
        }
  
        return <td>{item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )


export default LendersTableComponent;
