import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
function EditRow({ rowData }) {
  const [show, setShow] = useState(false);
  const [formValue, setformValue] = React.useState({
      caseId: rowData.caseId,
      fName: rowData.fName,
      lName: rowData.lName,
      email: rowData.email,
      phone_num:rowData.phone_num,
      status:rowData.status,
      creditScore:rowData.creditScore,
      date:rowData.date,
      status_check:rowData.status_check
  });

  const handleSubmit = async() => {
  // store the states in the form data
  var formData = new FormData();
    formData.append("caseId", formValue.caseId)
    formData.append("fName", formValue.fName)
    formData.append("lName", formValue.lName)
    formData.append("email", formValue.email)
    formData.append("phone_num", formValue.phone_num)
    formData.append("status", "")
    formData.append("creditScore", formValue.creditScore)
    formData.append("status_check", formValue.status_check)
    formData.append("date", '2022-10-13T02:23:05Z')
    console.log(Object.fromEntries(formData))
  try {
    const postBorrowers = `${process.env.REACT_APP_API_URL}/api/borrowers/`;
    const response = await axios({
      method: "post",
      url: postBorrowers,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
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
                    <option value="Closed">Closed</option>
                    <option value="New">New</option>
                    <option value="In progress">In progress </option>
                    </Form.Select>
                        </Form.Group>
                
                     <Form.Group className="mb-3" controlId="">
                    <Form.Check value={formValue.status_check}
                    onChange={handleChange} type="checkbox" label="The borrower is approved" />
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