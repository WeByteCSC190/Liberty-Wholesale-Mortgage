import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import api from "../../services/api";

function AddLendersRow({ page, url }) {

  // For Lenders Table
  const [show, setShow] = useState(false);

  const [formValue, setformValue] = React.useState({
    company: "",
    rating: "",
    programs: "",
    lender_FHA_ID: "",
    lender_VA_ID: "",
    account_executive: "",
    phone_num: "",
    email: "",
    website: "",
    logo: "",
  });

  useEffect(() => {
    const getStatus = `${process.env.REACT_APP_API_URL}/api/status/`;
    async function fetchData() {
      // Fetch data
      axios({
        method: "GET",
        url: getStatus,
      })
        .then((response) => {
          const data = response.data;
          setStatus(data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
    fetchData();
  }, []);

  const handleSubmit = () => {
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
      const response = api({
        method: "post",
        url: url,
        data: formData,
      });
      window.location.reload();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setShow(false);
    setformValue({
      ...formValue,
      company: "",
      rating: "",
      programs: "",
      lender_FHA_ID: "",
      lender_VA_ID: "",
      account_executive: "",
      phone_num: "",
      email: "",
      website: "",
      logo: "",
    });
  };
  const handleShow = () => setShow(true);

    return(
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Row
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add {page}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>

          <Form.Group className="mb-3" controlId="">
        <Form.Label>Company Infomation</Form.Label>
        <Form.Control 
            name="company" 
            type="text" 
            placeholder="Enter Company Name" 
            value={formValue.company}
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

        <Col>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Programs</Form.Label>
        <Form.Control name="programs" type="text" placeholder="Programs" value={formValue.programs}
        onChange={handleChange}/>
        <Form.Text className="text-muted">
         Enter list of programs separated by commas
        </Form.Text>
        </Form.Group>
        </Col>
        
         <Form.Group className="mb-3" controlId="">
                    <Form.Label>Account Executive</Form.Label>
                    <Form.Control name="account_executive" type="text" 
                                  placeholder="Account Executive"
                                  value={formValue.account_executive}
                        onChange={handleChange}/>
                     </Form.Group>

              <Row>
                <Col>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>FHA ID</Form.Label>
                    <Form.Control name="lender_FHA_ID" type="text" 
                                  placeholder="FHA ID"
                                  value={formValue.lender_FHA_ID}
                        onChange={handleChange}/>
                     </Form.Group>
                </Col>
                
                <Col>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>VA ID</Form.Label>
                    <Form.Control name="lender_VA_ID" type="text" 
                        placeholder="VA ID"
                        value={formValue.lender_VA_ID}
                        onChange={handleChange}/>
                     </Form.Group>
                </Col>
              </Row>
        

        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone_num" type="text" placeholder="Phone Number" value={formValue.phone_num}
        onChange={handleChange} />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Email Address" value={formValue.email}
        onChange={handleChange}/>
        </Form.Group> 
        </Col>
        </Row>
        <Row>

        <Col>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>URL</Form.Label>
        <Form.Control name="website" type="text" placeholder="Website Url" value={formValue.website}
        onChange={handleChange} />
        <Form.Text className="text-muted">
          Enter a link with http/https. 
        </Form.Text>
        <Form.Text className="text-muted">
          Example: https://www.google.com
        </Form.Text>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>Upload an image the company logo</Form.Label>
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
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default AddLendersRow;


