import Table from 'react-bootstrap/Table';
import AddRow from "../components/modals/AddRow";
import ActionBtn from "../components/buttons/Action";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { saveAs } from 'file-saver'

const TableComponent = ({api, page, data, column, notes}) => {
  const [noteText, setNoteText] = useState("");
 /**
   * This function adds note.
   */
const handleAddNote = async (caseId) => {
  // store the states in the form data
  if (page === "Borrowers") {
    var formData = new FormData();
   formData.append("borrowernote",noteText)
    formData.append("borrower", caseId)
  api="http://localhost:8000/api/get-borrowernote"
    try {
      const response = await axios({
        method: "post",
        url: api,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      window.location.reload(false);
    
    } catch(error) {
      console.log(error)
    }
  }else if (page === "Leads") {
    var formData = new FormData();
   formData.append("leadnote",noteText)
    formData.append("lead", caseId)
  api="http://localhost:8000/api/get-leadnote"
    try {
      const response = await axios({
        method: "post",
        url: api,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      window.location.reload(false);
    } catch(error) {
      console.log(error)
    }
  }
  
}
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
    <div style={{ paddingBottom: 10, paddingLeft: 90, paddingRight: 90 }}>
      <Table className="Table" responsive hover >
        <thead>
      <tr className="table-title">List of {page}</tr>
      <tr className="table-heading">
            {column.map((item, index) =>
              <TableHeadItem key={"heading"+index} item={item} api={api} page={page} />
            )}
        </tr>
      </thead>
      <tbody>
          {data.map((item, index) => <TableRow key={"tableRow"+index}
            page={page} item={item} column={column} notes={notes} index={index} 
            expandedRows={expandedRows} handleEpandRow={handleEpandRow} 
            expandState={expandState}
            handleAddNote={handleAddNote}
            setNoteText ={setNoteText}
          />)}
      
      <tr className="last-table-row">
        Showing {data.length} out of {data.length} results 
      </tr>
      </tbody>
      </Table>
      </div>
  );
}
const TableHeadItem = ({ item, api, page }) =>
{
  if (item.heading === 'AddRow') {
    return (<th><AddRow page={`${page}`} api={`${api}`} /></th>);
  }
 else {
    return (<th>{`${item.heading}`}</th>);
  }
};
    
const TableRow = ({ page, item, column, notes, index, expandedRows, handleEpandRow, expandState,
  handleAddNote, setNoteText }) => (
  <>
  <tr id={index}>
      {column.map((columnItem) => {
      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.')
        return <td key={index}>{item[itemSplit[0]][itemSplit[1]]}</td>
      }
      if (columnItem.heading === 'AddRow') {
        return (<th key={"addRow"+index}><ActionBtn page={`${page}`} rowData={item} index={index} /></th>);
      }
      else if (columnItem.heading === 'Details') {
        return (<th key={"detail"+index}> <Button variant="link" 
          value={index}  onClick={event => handleEpandRow(event, item.caseId)}>
            {
              expandState[item.caseId] ?
                'Hide' : 'Show'
            }</Button> </th>);
      }
      else if (columnItem.heading === 'Link' ||
      columnItem.heading === 'Image Link' || columnItem.heading === 'Video Link') {
        return (<td key={columnItem.heading+index}> <Button variant="link"
          onClick={(e) => window.open( item[`${columnItem.value}`], "_blank")}
         >
           Open
        </Button>
        <Button variant="link" 
            onClick={(e) =>saveAs(item[`${columnItem.value}`], 'image.jpg')}>
            Download
          </Button>
        </td>);
      }
      else {
        if(columnItem.heading==="Date") {
          return <td key={"date"+index}>{item[`${columnItem.value}`].slice(0, 10)}</td>
        }
        return <td key={"row"+index}>{item[`${columnItem.value}`]}</td>
      }
      
    })}
    </tr>
    <>
      {
      expandedRows.includes(item.caseId) ?
          <tr id={index + "_note"}>
            <td colspan="12" style={{ backgroundColor: '#343A40', color: '#FFF' }}>
              {notes.map((note, index) => {
                if (page === "Borrowers"){
                  if (note.borrower === item.caseId) {
                    return <>
                      <li key={note+index}>{note.borrowernote}<small> ({note.created_on})</small>
                      </li>
                    </>
                  }
              }else if (page === "Leads"){
                  if (note.lead === item.caseId) {
                    return <>      
                      <li>{note.leadnote}<small> ({note.created_on})</small>
                      </li>
                    </>
                  }
              }
            })}
            <Form>
                <Form.Group className="mb-3" controlId="notesTextarea">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={3}
                  onChange={(e) => setNoteText(e.target.value)}/>
                </Form.Group>
                <Button variant="outline-light" onClick={event => handleAddNote(item.caseId)}>
                  Save
                </Button>
              </Form>
            </td>
          </tr> :
          null
    }
    </>
  </>
)

export default TableComponent;