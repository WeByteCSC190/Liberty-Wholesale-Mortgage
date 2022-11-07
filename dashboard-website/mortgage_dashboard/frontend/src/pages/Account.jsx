import * as React from 'react';
import Navbar from "../components/Navbar";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "../components/Account.css";


const Account = () => {
  return (
    <>
    <div className="Header">
      <Navbar />
      <p className="Page-Title">Account</p>
    </div>
    <div className="Content">
        <div className="AccountPage-Content">
          <div className="user-info">
            <FloatingLabel
              controlId="floatingInput"
              label="Full Name, Middle Name, Last Name"
              className="mb-3"
            >
            <Form.Control placeholder="John Doe" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="NMLS ID (Can't be changed by user)"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Row className="mb-3">
              <Col xs={9}>
                <Form.Control placeholder="Address" />
              </Col>
              <Col>
                <Form.Control placeholder="Postal Code" />
              </Col>
            </Row>


            <FloatingLabel
              controlId="floatingInput"
              label="Secondary Address (if applicable)"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Date of Birth"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Social Security Number (Displayed as XXX-XXX-1234)"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Form.Select aria-label="Default select example">
              <option>Role (Select Button)</option>
              <option value="Loan Officer">Loan Officer</option>
              <option value="Loan Approver">Loan Approver</option>
            </Form.Select>
          </div>
          <div className="user-photo">
            <div className="picture">
            </div>
            <div className="picture-buttons">
             <Button variant="primary" size="sm">
               Edit
             </Button>
             <Button variant="light" size="sm">
               Change Photo
             </Button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Account;
