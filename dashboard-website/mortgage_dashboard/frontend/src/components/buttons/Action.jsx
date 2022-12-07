import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '../modals/EditRow'
import EditLenders from '../modals/EditLenders';
import Confirmation from '../modals/Confirmation'
import Button from 'react-bootstrap/Button';

function ActionBtn({ page, rowData, index }) {
  if (page==="Borrowers") {
   return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit page={`${page}`} rowData={rowData}/>
         <Confirmation btn="Delete" title="Remove Borrower" cID={rowData.caseId} message="Are you sure you want to remove this borrower permanently?" apiUrl="http://localhost:8000/api/borrowers/" />
         <Confirmation btn="Move To Leads" title="Move To Leads" cID={rowData.caseId} message="Are you sure you want to move this borrwer to leads  permanently?" apiUrl="http://localhost:8000/api/borrowers/" rowData={rowData}/>
        
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
        <Edit page={`${page}`} rowData={rowData}/>
        {/* <Dropdown.Item onClick={(e)=> handleDelete(e.target.value)}>Delete</Dropdown.Item> */}

        <Confirmation btn="Delete"title="Remove Borrower" cID={rowData.caseId} message="Are you sure you want to remove this lead permanently?" apiUrl="http://localhost:8000/api/leads/"/>
        <Confirmation btn="Move To Borrowers" title="Move To Borrowers" cID={rowData.caseId} message="Are you sure you want to move this lead to borrower permanently?" apiUrl="http://localhost:8000/api/leads/" rowData={rowData}/>
      </Dropdown.Menu>
    </Dropdown>
  );
  }
  else if (page === "EditResources-file") {
    return (
     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit page={`${page}`} rowData={rowData}/>
        <Confirmation  btn="Delete" title="Remove file" cID={rowData.id} message="Are you sure you want to remove this file permanently?" apiUrl="http://localhost:8000/api/files/"/>
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
        <Edit page={`${page}`} rowData={rowData}/>
        <Confirmation   btn="Delete" title="Remove article" cID={rowData.caseId} message="Are you sure you want to remove this article permanently?" apiUrl="http://localhost:8000/api/leads/"/>
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
        <Edit page={`${page}`} rowData={rowData}/>
        <Confirmation  btn="Delete" title="Remove video" cID={rowData.id} message="Are you sure you want to remove this video permanently?" apiUrl="http://localhost:8000/api/media/"/>
      </Dropdown.Menu>
    </Dropdown>
  );
   }
   else if(page === "Lenders"){
    return(
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <EditLenders page={`${page}`} rowData={rowData}/>
          <Confirmation btn="Delete" title="Remove Lender" cID={rowData.id} message="Are you sure you want to remove this Lenders permanently?"
          apiUrl="http://localhost:8000/api/lender/"/>
      </Dropdown.Menu>
    </Dropdown>
    );
   }
  
}

export default ActionBtn;
