import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import api from "../../services/api";
/* For the Lender pages */ 

function EditLenderRow({ page, rowData }) {
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
  formData.append("company", formValue.company);
  formData.append("rating", formValue.rating);
  formData.append("programs", formValue.programs);
  formData.append("lender_FHA_ID", formValue.lender_FHA_ID);
  formData.append("lender_VA_ID", formValue.lender_VA_ID);
  formData.append("account_executive", formValue.account_executive);
  formData.append("phone_num", formValue.phone_num);
  formData.append("email", formValue.email);
  formData.append("website", formValue.website);
  formData.append("logo", formValue.logo);
    try {
    var url = `${process.env.REACT_APP_API_URL}/api/lender/`;
    const response = api({
      method: "PUT",
      url: url+rowData.id+"/",
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
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
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
                    <Form.Control name="company" type="text" placeholder={formValue.company} value={formValue.company}
                    onChange={handleChange}/>
                    </Form.Group>
                    
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select name="rating" aria-label="Default select example" value={formValue.rating}
                        onChange={handleChange}>
                        <option value="A">A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="U">U</option>
                    </Form.Select>
                    </Form.Group> 
                </Col>
              </Row>
      
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Programs</Form.Label>
                    <Form.Control name="programs" type="text" placeholder={formValue.programs} value={formValue.programs}
                                  onChange={handleChange}/>
                    <Form.Text className="text-muted">
                          Enter the list of programs separated by commas
                    </Form.Text>
                    </Form.Group>
              
              <Form.Group className="mb-3" controlId="">
                    <Form.Label>Account Executive</Form.Label>
                    <Form.Control name="account_executive" type="text" 
                                  placeholder={formValue.account_executive} 
                                  value={formValue.account_executive}
                        onChange={handleChange}/>
                     </Form.Group>

              <Row>
                <Col>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>FHA ID</Form.Label>
                    <Form.Control name="lender_FHA_ID" type="text" 
                                  placeholder={formValue.lender_FHA_ID} 
                                  value={formValue.lender_FHA_ID}
                        onChange={handleChange}/>
                     </Form.Group>
                </Col>
                
                <Col>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>VA ID</Form.Label>
                    <Form.Control name="lender_VA_ID" type="text" 
                                  placeholder={formValue.lender_VA_ID} 
                                  value={formValue.lender_VA_ID}
                        onChange={handleChange}/>
                     </Form.Group>
                </Col>
              </Row>
        
              <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control name="phone_num" type="text" 
                      placeholder={formValue.phone_num} 
                      value={formValue.phone_num}
                      onChange={handleChange} />
                  </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="text" 
                        placeholder={formValue.email} 
                        value={formValue.email}
                        onChange={handleChange}/>
                     </Form.Group>
                </Col>
    
              </Row>
              <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="">
                    <Form.Label>URL</Form.Label>
                    <Form.Control name="website" type="text" placeholder={formValue.website} value={formValue.website}
                       onChange={handleChange} />
                    <Form.Text className="text-muted">
                        Enter a link with http or https.
                    </Form.Text>
                    <Form.Text className="text-muted">
                        Example: https://www.google.com
                    </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                  <Form.Label>Upload an image of the company logo</Form.Label>
                  <Form.Control type="file" />
                  <Form.Text className="text-muted">
                      Note: Width of picture is 150px and height is 75px
                  </Form.Text>
                  </Form.Group>
                </Col>
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

export default EditLenderRow;
