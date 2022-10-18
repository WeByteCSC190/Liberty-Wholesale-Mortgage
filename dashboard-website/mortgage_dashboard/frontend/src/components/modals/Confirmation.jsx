import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
function Confirmation({cID, title, message, apiUrl}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleSubmit = () => {
        // axios({
        //   method: "POST",
        //   url:{apiUrl},
        // }).then((response)=>{
        //   const data = response.data;
          
        // }).catch((error) => {
        //   if (error.response) {
        //     console.log(error.response);
        //     console.log(error.response.status);
        //     console.log(error.response.headers);
        //     }
        // })
        window.location.reload(false);
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