import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '../modals/EditRow'
import Delete from '../modals/Confirmation'
import Button from 'react-bootstrap/Button';

function ActionBtn({ page, rowData, index }) {
  if (page==="Borrowers") {
   return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit page={page} rowData={rowData} />
        {/* <Dropdown.Item onClick={(e)=> handleDelete(e.target.value)}>Delete</Dropdown.Item> */}

        <Delete title="Remove Borrower" cID={rowData.caseId} message="Are you sure you want to remove this borrower permanently?" apiUrl="http://localhost:8000/api/borrower-delete/"/>
        <Dropdown.Item href="#/action-3">Move to leads</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  }
  else if (page==="Leads") {
    return (
    
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit  page={page} rowData={rowData}/>
        {/* <Dropdown.Item onClick={(e)=> handleDelete(e.target.value)}>Delete</Dropdown.Item> */}

        <Delete title="Remove Borrower" cID={rowData.caseId} message="Are you sure you want to remove this lead permanently?" apiUrl="http://localhost:8000/api/lead-delete/"/>
        <Dropdown.Item href="#/action-3">Move to borrowers</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  }
  else if (page === "Files") {
    return (
     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit rowData={rowData}/>
        <Delete title="Remove file" cID={rowData.caseId} message="Are you sure you want to remove this file permanently?" apiUrl="http://localhost:8000/api/lead-delete/"/>
      </Dropdown.Menu>
    </Dropdown>
  );
  }
    else if (page === "EditResources-carousel") {
    return (
     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit rowData={rowData}/>
        <Delete title="Remove image" cID={rowData.caseId} message="Are you sure you want to remove this image permanently?" apiUrl="http://localhost:8000/api/lead-delete/"/>
      </Dropdown.Menu>
    </Dropdown>
  );
  }
   else if (page === "EditResources-video") {
    return (
     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit rowData={rowData}/>
        <Delete title="Remove video" cID={rowData.caseId} message="Are you sure you want to remove this video permanently?" apiUrl="http://localhost:8000/api/lead-delete/"/>
      </Dropdown.Menu>
    </Dropdown>
  );
   }
   else if(page === "Lenders"){
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit rowData={rowData}/>
        <Delete title="Remove Lender" cID={rowData.company} message="Are you sure you want to remove this Lenders permanently?"/>
      </Dropdown.Menu>
    </Dropdown>

   }
  
}

export default ActionBtn;