import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function AddLenders({api, page, topic}) {



  const handleSubmit = async() => {
  // store the states in the form data
  var formData = new FormData();
    formData.append("company", formValue.company)
    formData.append("rating", formValue.rating)
    formData.append("programs", formValue.programs)
    formData.append("website", formValue.website)
    formData.append("lender_FHA_ID", formValue.lender_FHA_ID)
    formData.append("lender_VA_ID", formValue.lender_VA_ID)
    formData.append("account_executive", formValue.account_executive)
    formData.append("phone_num", formValue.phone_num)
    formData.append("email'", formValue.email)
    console.log(Object.fromEntries(formData))
  try {
    const response = await axios({
      method: "post",
      url: api,
      data: formData,
        headers: { "Content-Type": "multipart/form-data",
      "Authorization": "Bearer " +localStorage.getItem('access')
      },

    });
    window.location.reload(false);
    handleClose();
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

  const handleClose = () => {
    setShow(false)
    setformValue({
      ...formValue,
      caseId: '',
      fName: '',
      lName: '',
      email: '',
      phone_num: '',
      status: '',
      creditScore: '',
      date: '',
      status_check: false
    });
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Row
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add {page}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Company Info</Form.Label>
        <Form.Control name="company" type="text" placeholder="Enter Company Name" value={formValue.company}
        onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Rating</Form.Label>
        <Form.Text className="text-muted">
          Enter a rating of A, B, C, U. Symbols of +/- may be included. 
        </Form.Text>
        <Form.Control name="rating" type="text" placeholder="Rating" value={formValue.rating}
        onChange={handleChange}/>
        </Form.Group>
            
       <Form.Group className="mb-3" controlId="">
        <Form.Label>Programs</Form.Label>
        <Form.Control name="lName" type="text" placeholder="Programs" value={formValue.programs}
        onChange={handleChange}/>
        </Form.Group>
            
       <Form.Group className="mb-3" controlId="">
        <Form.Label>URL</Form.Label>
        <Form.Text className="text-muted">
          URL must be entered with http or https. 
        </Form.Text>
        <Form.Control name="website" type="text" placeholder="'https://www.websitename.com'" value={formValue.website}
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
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default AddLenders;
