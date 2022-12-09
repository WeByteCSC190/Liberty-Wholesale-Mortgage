import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import api from "../../services/api";
/* For the Lender pages */

function EditUserRow({ page, rowData }) {
  const [show, setShow] = useState(false);

  const [formValue, setformValue] = React.useState({
    address_1: rowData.address_1,
    address_2: rowData.address_2,
    fName: rowData.fName,
    lName: rowData.lName,
    email: rowData.email,
    bio: rowData.bio,
    ssn: rowData.ssn,
    username: rowData.username,
    zip_code: rowData.zip_code,
    city: rowData.city,
    state: rowData.state,
    role: rowData.role,
    nmlsID: rowData.nmlsID,
    milestone_count: rowData.milestone_count,
  });

  const handleSubmit = async () => {
    // store the states in the form data
    var formData = new FormData();
    formData.append("address_1", formValue.address_1);
    formData.append("address_2", formValue.address_2);
    formData.append("fName", formValue.fName);
    formData.append("lName", formValue.lName);
    formData.append("email", formValue.email);
    formData.append("bio", formValue.bio);
    formData.append("ssn", formValue.ssn);
    formData.append("username", formValue.username);
    formData.append("zip_code", formValue.zip_code);
    formData.append("city", formValue.city);
    formData.append("state", formValue.state);
    formData.append("role", formValue.role);
    formData.append("nmlsID", formValue.nmlsID);
    formData.append("milestone_count", formValue.milestone_count);

    const updateAccountUrl =
      `${process.env.REACT_APP_API_URL}/accounts/users/admin_update_profile/` +
      rowData.id +
      `/`;
    // console.log(updateAccountUrl);
    api({
      method: "PUT",
      url: updateAccountUrl,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
        return data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setShow(false);
    window.location.reload(false);
  };

  const handleShow = () => setShow(true);
  return (
    <>
      <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>User: {rowData.username} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      name="username"
                      type="text"
                      placeholder={formValue.username}
                      value={formValue.username}
                      // onChange={handleChange}
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      name="role"
                      aria-label="Default select example"
                      value={formValue.role}
                      onChange={handleChange}
                    >
                      <option value="Loan Officer">Loan Officer</option>
                      <option value="Loan Processor">Loan Processor</option>
                      <option value="A-">Admin</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              {/* <Form.Group className="mb-3" controlId=""> */}
              {/*   <Form.Label>Programs</Form.Label> */}
              {/*   <Form.Control */}
              {/*     name="programs" */}
              {/*     type="text" */}
              {/*     placeholder={formValue.programs} */}
              {/*     value={formValue.programs} */}
              {/*     onChange={handleChange} */}
              {/*   /> */}
              {/*   <Form.Text className="text-muted"> */}
              {/*     Enter the list of programs separated by commas */}
              {/*   </Form.Text> */}
              {/* </Form.Group> */}

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="fName"
                      type="text"
                      placeholder={formValue.fName}
                      value={formValue.fName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lName"
                      type="text"
                      placeholder={formValue.lName}
                      value={formValue.lName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder={formValue.email}
                  value={formValue.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  name="address_1"
                  type="text"
                  placeholder={formValue.address_1}
                  value={formValue.address_1}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Secondary Street Address</Form.Label>
                <Form.Control
                  name="address_2"
                  type="text"
                  placeholder={formValue.address_2}
                  value={formValue.address_2}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Milestones Count</Form.Label>
                <Form.Control
                  name="milestone_count"
                  type="text"
                  placeholder={formValue.milestone_count}
                  value={formValue.milestone_count}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      name="city"
                      type="text"
                      placeholder={formValue.city}
                      value={formValue.city}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      name="state"
                      type="text"
                      placeholder={formValue.state}
                      value={formValue.state}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      name="zip_code"
                      type="text"
                      placeholder={formValue.zip_code}
                      value={formValue.zip_code}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>NMLS ID</Form.Label>
                    <Form.Control
                      name="website"
                      type="text"
                      placeholder={formValue.nmlsID}
                      value={formValue.nmlsID}
                      onChange={handleChange}
                    />
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

export default EditUserRow;
