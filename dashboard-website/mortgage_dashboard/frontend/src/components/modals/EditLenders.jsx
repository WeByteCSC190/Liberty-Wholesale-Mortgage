import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

/* For the Lender pages */ 

function ManageRow({ api, rowData }) {
  const [show, setShow] = useState(false);
  const [formValue, setformValue] = React.useState({
      company:rowData.company,
      rating:rowData.rating,
      programs:rowData.programs,
      fha:rowData.lender_FHA_ID,
      va:rowData.lender_VA_ID,
      account_executive:rowData.account_executive,
      phone_num:rowData.phone_num,
      email:rowData.email,
      logo:rowData.logo
  });

  const handleSubmit = async() => {
  // store the states in the form data
  var formData = new FormData();
    formData.append("company", formValue.company)
    formData.append("rating", formValue.rating)
    formData.append("programs", formValue.programs)
    formData.append("fha", formValue.lender_FHA_ID)
    formData.append("va", formValue.lender_VA_ID)
    formData.append("status", "")
    formData.append("creditScore", formValue.creditScore)
    formData.append("status_check", formValue.status_check)
    formData.append("date", '2022-10-13T02:23:05Z')
    console.log(Object.fromEntries(formData))
  try {
    const postLink = api;
    const response = await axios({
      method: "post",
      url: postLink,
      data: formData,
      headers: { "Content-Type": "multipart/form-data",
      "Authorization": "Bearer "  +localStorage.getItem('access')
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
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <Dropdown.Item onClick={handleShow}>Manage</Dropdown.Item>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>Lender: {rowData.company} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Company</Form.Label>
                    <Form.Control name="company" type="text" placeholder="Company Name" value={formValue.company}
                    onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name="rating" type="text" placeholder="Rating" value={formValue.lName}
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

export default ManageRow;
