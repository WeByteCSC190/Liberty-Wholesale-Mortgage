import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '../modals/EditRow'
import EditLenders from '../modals/EditLenders';
import Confirmation from '../modals/Confirmation'
import Button from 'react-bootstrap/Button';

function ManageBtn({ page, rowData, index }) {

    return(
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Action
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <EditLenders page={`${page}`} rowData={rowData}/>
            <Confirmation  btn="Delete" title="Remove Lender" cID={rowData.id} 
                    message="
                    Are you sure you want to remove this Lender permanently? 
                    "
          apiUrl="http://localhost:8000/api/lender/"/>
          </Dropdown.Menu>
        </Dropdown>
        );

}

export default ManageBtn;