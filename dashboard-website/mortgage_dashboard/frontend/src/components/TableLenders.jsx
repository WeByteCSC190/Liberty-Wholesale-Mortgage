import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';


const LendersTableComponent = ({ data, column, columnTwo, columnLink }) => {
  return (
    <div style={{ paddingLeft: 90, paddingRight:90 }}>

      
     
    <Table className="Table" responsive >
      <thead>
        <tr className="table-title">List of Lenders</tr>
        <tr className="table-heading">
          {column.map((item, index) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
         {data.map((item, index) => <TableRow item={item} column={column} />)}
         {data.map((item, index) => <TableRow item={item} columnTwo={columnTwo} />)}
         {data.map((item, index) => <TableRow item={item} columnLink={columnLink} />)}

      </tbody>
      </Table>
      </div>
  );
}
const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column, columnTwo, columnLink }) => (
  <tr>
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
