import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '../modals/EditRow'
import Delete from '../modals/Confirmation'
import axios from 'axios';

function ManageBtn({ nameButton, api, page, rowData, rowKey, index }){
    const handleDelete = (e) => { 
        axios({
          method: "POST",
          url: api,
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
        {nameButton}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Edit rowData={rowData}/>
        <Delete title= {"Remove" + {page}} 
            cID={rowKey} 
            message={"Are you sure you want to remove this " + {page} + " permanently?"} 
            apiUrl={api}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ManageBtn;