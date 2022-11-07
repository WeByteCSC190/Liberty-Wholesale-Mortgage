import Table from 'react-bootstrap/Table';
import LinkBtn from "../components/buttons/Link";
import ManageBtn from "../components/buttons/Manage";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BlueLogo from './images/blue_logo.png';

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
    <div style={{ paddingBottom: 10, paddingLeft: 90, paddingRight: 90 }}>
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
            api={api} item={item} data={data} 
            column={column} columns={columns} index={index} 
            expandedRows={expandedRows} 
            handleEpandRow={handleEpandRow} 
            expandState={expandState} 
            />)}
      </tbody>

      <tr className="last-table-row">
        Showing {data.length} out of {data.length} results 
        </tr>
      </Table>
      </div>
  );
 } 

 // Renders information or buttons on the heading of the table
const TableHeadItem = ({ item, api }) =>
  {
  if (item.heading === 'TPOLogin') {
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
const TableRow = ({ api, item, data, column, columns, image, index, expandedRows,handleEpandRow,expandState}) => (
  <>
  <tr id={index}>
    {column.map((columnItem) => {
      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.')
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }
      if (columnItem.heading === 'Website') {
        return (<th><LinkBtn nameBtn={"TPO Login"} color={"info"} url={item.website} /></th>);
      } else if (columnItem.heading === 'Admin') {
        return (<th><ManageBtn 
          nameButton="Manage" 
          api={api} page={"Lenders"} 
          rowData={item} rowKey={item.company}/>
          </th>);
      }
      else if (columnItem.heading === 'Details') {
        return (<th> <Button variant="link" 
          value={index}  onClick={event => handleEpandRow(event, item.company)}>
            {
              expandState[item.company] ?
                'Hide' : 'Show'
            }</Button> </th>);
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
              <p> Company Info </p>
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
              src={columns.logo} 
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


export default LendersTableComponent;