import Table from 'react-bootstrap/Table';
import AddRow from "../components/modals/AddRow";
import ActionBtn from "../components/buttons/Action";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const TableComponent = ({ page, data, column }) => {
  let pageName = page
  // State variable to keep track of all the expanded rows
  const [expandedRows, setExpandedRows] = useState([]);

  // State variable to keep track which row is currently expanded.
  const [expandState, setExpandState] = useState({});

  /**
   * This function gets called when show/hide link is clicked.
   */
  const handleEpandRow = (event, caseId) => {
    const currentExpandedRows = expandedRows;
    const isRowExpanded = currentExpandedRows.includes(caseId);

    let obj = {};
    isRowExpanded ? (obj[caseId] = false) :  (obj[caseId] = true);
    setExpandState(obj);

    // If the row is expanded, we are here to hide it. Hence remove
    // it from the state variable. Otherwise add to it.
    const newExpandedRows = isRowExpanded ?
          currentExpandedRows.filter(id => id !== caseId) :
          currentExpandedRows.concat(caseId);

    setExpandedRows(newExpandedRows);
  }
  return (
    <div style={{ paddingBottom: 300,paddingLeft: 90, paddingRight: 90 }}>
      <Table className="Table" responsive hover >
      <thead>
      <tr className="table-title">List of {pageName}</tr>
      <tr className="table-heading">
            {column.map((item, index) =>
              <TableHeadItem item={item} />
            )}
        </tr>
      </thead>
      <tbody>
          {data.map((item, index) => <TableRow
            item={item} column={column} index={index} expandedRows={expandedRows} handleEpandRow={handleEpandRow} expandState={expandState} />)}
      </tbody>
      <tr className="last-table-row">
        Showing {data.length} out of {data.length} results 
        </tr>
      </Table>
      </div>
  );
}
const TableHeadItem = ({ item }) =>
  {
  if (item.heading === 'AddRow') {
    return (<th><AddRow /></th>);
  } else {
    return (<th>{`${item.heading}`}</th>);
  }
};
const toggle = (e) => {
  console.log("show or hide")
  console.log(e)
}
const TableRow = ({ item, column, index,expandedRows,handleEpandRow ,expandState}) => (
  <>
  <tr id={index}>
    {column.map((columnItem) => {
      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.')
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }
      if (columnItem.heading === 'AddRow') {
        return (<th><ActionBtn rowData={item} index={index} /></th>);
      }
      else if (columnItem.heading === 'Details') {
        return (<th> <Button variant="link" 
          value={index}  onClick={event => handleEpandRow(event, item.caseId)}>
            {
              expandState[item.caseId] ?
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
      expandedRows.includes(item.caseId) ?
      <tr>
        <td colspan="12" style={{backgroundColor: '#343A40', color: '#FFF'}}>
              <p> Here should be details about {item.fName}'s case. </p>
               <Form>
                <Form.Group className="mb-3" controlId="notesTextarea">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="outline-light">
                Save
                </Button>
              </Form>
        </td>
      </tr> : null
    }
    </>
  </>
)

export default TableComponent;