import React, { useState } from 'react';
import api from '../../services/api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
function Confirmation({cID, title, message, apiUrl}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    
     
     console.log(apiUrl+"/"+cID+"/")
        api({
headers: { "Content-Type": "multipart/form-data",
      },
          method: "DELETE",
          url: apiUrl+cID+"/",
        }).then((response)=>{
          console.log("delete successfull for" +cID);
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
    <>
      <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Confirmation;
