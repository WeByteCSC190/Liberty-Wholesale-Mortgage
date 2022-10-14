import Dropdown from 'react-bootstrap/Dropdown';

function ActionBtn() {
    const RemoveRow = () => { 
        console.log("remove started")
    }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
        <Dropdown.Item onClick={RemoveRow}>Delete</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Move to leads</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ActionBtn;