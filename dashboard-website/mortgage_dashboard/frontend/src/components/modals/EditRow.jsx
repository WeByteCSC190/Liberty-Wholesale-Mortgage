import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
function EditRow({ page, rowData }) {
  const [show, setShow] = useState(false);
  const [formValue, setformValue] = React.useState({
      caseId: rowData.caseId,
      fName: rowData.fName,
      lName: rowData.lName,
      email: rowData.email,
      phone_num:rowData.phone_num,
      status: rowData.status,
      creditScore:rowData.creditScore,
      date:rowData.date,
  });

  const handleSubmit = async() => {
  // store the states in the form data
  var formData = new FormData();
  formData.append("caseId", formValue.caseId)
  formData.append("fName", formValue.fName)
  formData.append("lName", formValue.lName)
  formData.append("email", formValue.email)
  formData.append("phone_num", formValue.phone_num)
  formData.append("status", formValue.status)
  formData.append("creditScore", formValue.creditScore)
  console.log(page)
  if (page === "Borrowers"){
    try {
      const postBorrowers = 'http://localhost:8000/api/borrowers/' + formValue.caseId + '/';
      const response = await axios({
        method: "PUT",
        url: postBorrowers,
        data: formData,
   headers: { "Content-Type": "multipart/form-data",
      "Authorization": "Bearer" +localStorage.getItem('access')
      },
      });
      window.location.reload(false);
      handleClose();
    } catch(error) {
      console.log(error)
    }
  } else if(page === "Leads"){
      try{
          const postLeads = 'http://localhost:8000/api/leads/' + formValue.caseId +'/';
          const response = await axios({
            method: "PUT",
            url: postLeads,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          window.location.reload(false);
          handleClose();
        } catch(error) {
          console.log(error)
        }
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
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>Case ID: {rowData.caseId} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="fName" type="text" placeholder="First Name" value={formValue.fName}
                    onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lName" type="text" placeholder="Last Name" value={formValue.lName}
                    onChange={handleChange}/>
                    </Form.Group>
                </Col>
              </Row>
      
             <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Credit Score</Form.Label>
                    <Form.Control name="creditScore" type="text" placeholder="Credit Score" value={formValue.creditScore}
                    onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="email" type="email" placeholder="Enter Email" value={formValue.email}
                      onChange={handleChange}/>
                      </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone_num" type="text" placeholder="Enter Phone Number" value={formValue.phone_num}
                    onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                      <Form.Group controlId="date">
                      <Form.Label>Date</Form.Label>
                      <Form.Control name="date" type="date" placeholder="Creation Date" value={formValue.date}
                    onChange={handleChange}/>
                    </Form.Group>
                </Col>
              </Row>
        
              <Row>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Select Status</Form.Label>
                        <Form.Select name="status" aria-label="Default select example" value={formValue.status}
                        onChange={handleChange}>
                        <option>Open to select status</option>
                        <option value='Closed'>Closed</option>
                        <option value='New'>New</option>
                        <option value='In_Progress'>In Progress</option>
                        <option value='Application_Complete'>Application Complete</option>
                        <option value='AUS_Cleared'>AUS Cleared</option>
                        <option value='Initial_Disclosure_Sent'>Initial Disclosure Sent</option>
                        <option value='Title_Ordered'>Title Ordered</option>
                        <option value='Title_Recieved'>Title Recieved</option>
                        <option value='Appraisal_Ordered'>Appraisal Ordered</option>
                        <option value='Appraisal_Recieved'>Appraisal Recieved</option>
                        <option value='Initial_Disclosure_Recieved'>Initial Disclosure Recieved</option>
                        <option value='UW_Submitted'>UW Submitted</option>
                        <option value='UW_Response'>UW Response</option>
                        <option value='Pending_Conditions'>Pending Conditions</option>
                        <option value='Cleared_To_Close'>Cleared To Close</option>
                        <option value='Closing_Package_Sent'>Closing Package Sent</option>
                        </Form.Select>
                    </Form.Group>
              </Row>
        </Container>
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

export default EditRow;
