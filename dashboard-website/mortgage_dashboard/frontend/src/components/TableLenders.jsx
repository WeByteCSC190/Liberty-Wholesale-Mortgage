import Table from 'react-bootstrap/Table';
import AddLenderRow from "../components/modals/AddLender";
import LinkBtn from "../components/buttons/Link";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BlueLogo from './images/blue_logo.png';
import ManageBtn from './buttons/Manage';
import ColorIcons from './ColorIcon'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { render } from 'react-dom';

import UWM from '../components/images/UWM.jpg';

const LendersTableComponent = ({api, page, data, column, columns, image }) => {

  // State variable to keep track of all the expanded rows
  const [expandedRows, setExpandedRows] = useState([]);

  // State variable to keep track which row is currently expanded.
  const [expandState, setExpandState] = useState({});

  /**
   * This function gets called when show/hide link is clicked.
   */
  const handleEpandRow = (event, company) => {
    const currentExpandedRows = expandedRows;
    const isRowExpanded = currentExpandedRows.includes(company);

    let obj = {};
    isRowExpanded ? (obj[company] = false) :  (obj[company] = true);
    setExpandState(obj);

    // If the row is expanded, we are here to hide it. Hence remove
    // it from the state variable. Otherwise add to it.
    const newExpandedRows = isRowExpanded ?
          currentExpandedRows.filter(id => id !== company) :
          currentExpandedRows.concat(company);

    setExpandedRows(newExpandedRows);
  }

  return (
    
      <Table className="Table" responsive hover >
      <thead>
      <tr className="table-title">List of {page}</tr>
      <tr className="table-heading">
            {column.map((item, index) =>
              <TableHeadItem item={item} api={api} page={page} />
            )}
        </tr>
      </thead>
      <tbody>
          {data.map((item, index) => <TableRow
            api={api} 
            item={item} 
            data={data} 
            column={column} 
            columns={columns} 
            index={index} 
            expandedRows={expandedRows} 
            handleEpandRow={handleEpandRow} 
            expandState={expandState} 
            />)}
      </tbody>

      <tr className="last-table-row">
        Showing {data.length} out of {data.length} results 
        </tr>
      </Table>
      
  );
 } 

 // Renders information or buttons on the heading of the table
const TableHeadItem = ({ item, api, page }) =>
  {
  if (item.heading === 'AddRow' && page === "Lenders") {
    return (<th><AddLenderRow page={`${page}`} url={`${api}`} /></th>);
  }
  else if(item.heading === 'TPOLogin') {
    return (<th><LinkBtn nameButton="Website" url={api.website}/></th>);
  } 
 else {
    return (<th>{`${item.heading}`}</th>);
  }
};

const toggle = (e) => {
  console.log("show or hide")
  console.log(e)
}

// Creates and renders the information and/or buttons on each table
const TableRow = ({ api, item, data, page, column, columns, image, index, expandedRows,handleEpandRow,expandState}) => (
  <>
  <tr id={index}>
    {column.map((columnItem) => {
      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.')
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }
      if (columnItem.heading === "AddRow") {
        return (
          <th>
            <ManageBtn page={`${page}`} rowData={item} index={index} />
          </th>
        );
        }
      else if (columnItem.heading === 'Website') {
        return (<th><LinkBtn nameBtn={"TPO Login"} color={"info"} url={item.website} /></th>);
      } 
      else if (columnItem.heading === "Details") {
        return (<th key={page+"detail"+index}> <Button variant="light"
          value={index}  onClick={event => handleEpandRow(event, item.company)}>
          {
            expandState[item.company] ?
            arrowDown(false) : arrowDown(true)
          }</Button> </th>);
      }
       if(columnItem.heading == ""){
            return (
                <>
                  <th><ColorIcons choice={item.rating} /></th>
                </>
            )
       }
      else {
        return <td>{item[`${columnItem.value}`]}</td>
      }
      
    })}
    </tr>
    <>
    {
      expandedRows.includes(item.company) ?
      <tr>
        <td colspan="12" style={{backgroundColor: '#FFF', marginBottom: 0, }}>
              <p>Company Info</p>
              <Form>
                <Form.Group className="mb-3" controlId="notesTextarea">
                 <ExpandedRow api={api} item={item} columns={columns} image={image} index={index} expandState={expandState} />
                 </Form.Group>
            </Form>
        </td>
      </tr> : null
    } 
    </>
  </>
)

// Expands the table row and renders the hidden infomation when "show" is clicked
const ExpandedRow = ({ api, item, columns, image, index, expandState}) => {
  return(
    <>
    <div style={{ marginTop: 10 }}>
      <Table responsive>
          <thead>
          <tr>
            {columns.map((item, index) =>
              <TableHeadItem item={item} api={api} />
            )}
          </tr>
        </thead>
        <tbody>
        <tr id={index}>
    {columns.map((columnItem) => {
      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.')
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      } else if (columnItem.heading === 'Logo') {
        return (<td>
           <img
              src={company.logo} // columns.logo
              width="150"
              height="70"
              className="table-logo"
              alt={item.company}
        />
          </td>);
    }  else {
        return <td>{item[`${columnItem.value}`]}</td>
      }
    })}
    </tr>
        </tbody>
      </Table>
      </div>
    </>
  )
};

function arrowDown(condition) {

  if(condition){
    return(
      <FontAwesomeIcon color="black" icon={Icons.faAngleRight} />

    );
  } else {
    return(
      <FontAwesomeIcon className="fa-rotate-90" color="black" icon={Icons.faAngleRight} />
    
    );
  }
  
}


export default LendersTableComponent;
