import Dropdown from 'react-bootstrap/Dropdown';
import Edit from '../modals/EditLenders'
import Delete from '../modals/EditLenders'
import axios from 'axios';

/* For the Lender pages */

function ManageBtn({ nameButton, api, page, rowData, rowKey, index }){

  const handleDelete = (e) => { 
        axios({
          method: "POST",
          url: api,
headers: { "Content-Type": "multipart/form-data",
      "Authorization": "Bearer" +localStorage.getItem('access')
      },

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
        <Edit rowData={rowData.company}/>
        <Delete title= {"Remove Company Info"} 
            cID={rowKey} 
            message={"Are you sure you want to remove this lender permanently?"} 
            apiUrl={api}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ManageBtn;
