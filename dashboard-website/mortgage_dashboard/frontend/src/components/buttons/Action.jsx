import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '../modals/EditRow'
import Delete from '../modals/Confirmation'
import axios from 'axios';
function ActionBtn({ rowData, index }){
    const handleDelete = (e) => { 
       const api = "http://localhost:8000/api/borrowers/";
        axios({
          method: "POST",
          url:api,
        }).then((response)=>{
          const data = response.data;
          window.location.reload(false);
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })
      
    }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit rowData={rowData}/>
        {/* <Dropdown.Item onClick={(e)=> handleDelete(e.target.value)}>Delete</Dropdown.Item> */}
        <Delete title="Remove Borrower" cID={rowData.caseId} message="Are you sure you want to remove this borrower permanently?" apiUrl="http://localhost:8000/api/borrowers/"/>
        <Dropdown.Item href="#/action-3">Move to leads</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ActionBtn;