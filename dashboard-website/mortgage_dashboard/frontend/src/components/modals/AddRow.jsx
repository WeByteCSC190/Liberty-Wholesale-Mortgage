import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function AddRow() {
  const [show, setShow] = useState(false);
  // this.state = {
  //     caseid:'',
  //     fname: '',
  //     lname: '',
  //     email: '',
  //     phone: '',
  //     status: '',
  //     score: '',
  //     isApproved:false
  // };
//  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    // this.setState({ [e.target.name]: e.target.value });
  // }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleSubmit() {
  const postBorrowers = "http://localhost:8000/api/borrowers/";
  axios({
      method: "POST",
      url:postBorrowers,
    }).then((response)=>{
      const data = response.data;
      console.log(data);
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })
}
  return (
    // const { caseid, fname, lname, email,phone,status,score, isApproved } = this.state;
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Row
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Borrower</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Case ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Case ID" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
            
       <Form.Group className="mb-3" controlId="">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
            
       <Form.Group className="mb-3" controlId="">
        <Form.Label>Credit Score</Form.Label>
        <Form.Control type="text" placeholder="Credit Score" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone Number" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Select Status</Form.Label>
         <Form.Select aria-label="Default select example">
        <option>Open to select status</option>
        <option value="1">Closed</option>
        <option value="2">New</option>
        <option value="3">In progress </option>
        </Form.Select>
        </Form.Group>
        
        <Form.Group controlId="date">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="date" placeholder="Creation Date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
        <Form.Check type="checkbox" label="The borrower is approved" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddRow;