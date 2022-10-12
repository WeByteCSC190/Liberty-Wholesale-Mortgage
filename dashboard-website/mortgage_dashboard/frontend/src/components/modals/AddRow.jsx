import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function AddRow() {
  const [show, setShow] = useState(false);
  const [formValue, setformValue] = React.useState({
      caseId:'',
      fName: '',
      lName: '',
      email: '',
      phone_num: '',
      status: '',
      creditScore: '',
      date:'',
      status_check:false
  });

  const handleSubmit = async() => {
  // store the states in the form data
  var form = new FormData();
    form.append("caseId", formValue.caseId)
    form.append("fName", formValue.fName)
    form.append("lName", formValue.lName)
    form.append("email", formValue.email)
    form.append("phone_num", formValue.phone_num)
    form.append("status", formValue.status)
    form.append("creditScore", formValue.creditScore)
    form.append("status_check", formValue.status_check)
    form.append("date", formValue.date)
    console.log(formValue)
  try {
    const postBorrowers = "http://localhost:8000/api/borrowers/";
    const response = await axios({
      method: "post",
      url: postBorrowers,
      data: formValue,
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
  } catch(error) {
    console.log(error)
  }
}

  const handleChange = (event) => {
    
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
        <Form.Control name="caseId" type="text" placeholder="Enter Case ID" value={formValue.caseId}
        onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="fName" type="text" placeholder="First Name" value={formValue.fName}
        onChange={handleChange}/>
        </Form.Group>
            
       <Form.Group className="mb-3" controlId="">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lName" type="text" placeholder="Last Name" value={formValue.lName}
        onChange={handleChange}/>
        </Form.Group>
            
       <Form.Group className="mb-3" controlId="">
        <Form.Label>Credit Score</Form.Label>
        <Form.Control name="creditScore" type="text" placeholder="Credit Score" value={formValue.creditScore}
        onChange={handleChange} />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter Email" value={formValue.email}
        onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone_num" type="text" placeholder="Enter Phone Number" value={formValue.phone_num}
        onChange={handleChange} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Select Status</Form.Label>
        <Form.Select name="status" aria-label="Default select example" value={formValue.status}
        onChange={handleChange}>
        <option>Open to select status</option>
        <option value="Closed">Closed</option>
        <option value="New">New</option>
        <option value="In progress">In progress </option>
        </Form.Select>
            </Form.Group>
            
        <Form.Group controlId="date">
          <Form.Label>Select Date</Form.Label>
          <Form.Control name="date" type="date" placeholder="Creation Date" value={formValue.date}
        onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
        <Form.Check value={formValue.status_check}
        onChange={handleChange} type="checkbox" label="The borrower is approved" />
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