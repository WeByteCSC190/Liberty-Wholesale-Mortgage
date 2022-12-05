import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '../modals/EditRow'
import EditLenders from '../modals/EditLenders';
import Delete from '../modals/Confirmation'
import Button from 'react-bootstrap/Button';

function ManageBtn({ page, rowData, index }) {

    return(
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Action
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <EditLenders page={`${page}`} rowData={rowData}/>
            <Delete  btn="Delete" title="Remove Lender" cID={rowData.company} 
                    message="
                    Are you sure you want to remove this Lender permanently? 
                    "/>
          </Dropdown.Menu>
        </Dropdown>
        );

}

export default ManageBtn;