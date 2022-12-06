import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

function EditRow({ page, rowData }) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState([]);
  const [formValue, setformValue] = React.useState({
    caseId: rowData.caseId,
    fName: rowData.fName,
    lName: rowData.lName,
    email: rowData.email,
    phone_num: rowData.phone_num,
    status: rowData.status,
    creditScore: rowData.creditScore,
  });
 const [fileValue, setfileValue] = React.useState({
    link: rowData.link,
    filename: rowData.filename,
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
  const handleSubmit = async () => {
    // store the states in the form data
    var formData = new FormData();
    formData.append("caseId", formValue.caseId);
    formData.append("fName", formValue.fName);
    formData.append("lName", formValue.lName);
    formData.append("email", formValue.email);
    formData.append("phone_num", formValue.phone_num);
    formData.append("status", formValue.status);
    formData.append("creditScore", formValue.creditScore);
    console.log("status num is: " + formValue.status);
    if (page === "Borrowers") {
      try {
        const postBorrowers =
          `${process.env.REACT_APP_API_URL}/api/borrowers/` + formValue.caseId + "/";
        const response = await axios({
          method: "PUT",
          url: postBorrowers,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("access"),
          },
        });
        window.location.reload(false);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    } else if (page === "Leads") {
      try {
        const postLeads =
          `${process.env.REACT_APP_API_URL}/api/leads/` + formValue.caseId + "/";
        const response = await axios({
          method: "PUT",
          url: postLeads,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        window.location.reload(false);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
    else if (page === "EditResources-file") {
      try {
        const postFile =`${process.env.REACT_APP_API_URL}/api/files/` + rowData.id + "/";
        var fileData = new FormData();
        fileData.append("link", fileValue.link);
        fileData.append("filename", fileValue.filename);
        const response = await axios({
          method: "PUT",
          url: postFile,
          data: fileData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        window.location.reload(false);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    console.log("handle change is called");
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    setfileValue({
      ...fileValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  if (page === "Borrowers" || page === "Leads") {
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
                      <Form.Control
                        name="fName"
                        type="text"
                        placeholder="First Name"
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
                        placeholder="Last Name"
                        value={formValue.lName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Credit Score</Form.Label>
                      <Form.Control
                        name="creditScore"
                        type="text"
                        placeholder="Credit Score"
                        value={formValue.creditScore}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={formValue.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        name="phone_num"
                        type="text"
                        placeholder="Enter Phone Number"
                        value={formValue.phone_num}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Select Status</Form.Label>
                    <Form.Select
                      name="status"
                      aria-label="Default select example"
                      value={formValue.status}
                      onChange={handleChange}
                    >
                      {status.map((option) => {
                        if (option.status !== null && formValue.status !== null) {
                          if (option.status === formValue.status) {
                            return (
                              <option selected key={option.id} value={option.id}>
                                {option.status}
                              </option>
                            );
                          } else {
                            while (option.status !== formValue.status) {
                              return (
                                <option key={option.id} value={option.id}>
                                  {option.status}
                                </option>
                              );
                            }
                          }
                        } else {
                          return <option selected key="0" value=""></option>;
                        }
                      })}
                    </Form.Select>
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="">
                    <Form.Check value={formValue.status_check}
                    onChange={handleChange} type="checkbox" label="The borrower is approved" />
                    </Form.Group> */}
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
  else if (page === "EditResources-carousel") {
    return (
      <>
        <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit News and Article </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Article Link</Form.Label>
                <Form.Control
                  name="link"
                  type="text"
                  placeholder="Article Link"
                  value={formValue.fName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control
                  name="text"
                  type="text"
                  placeholder="Text"
                  value={formValue.fName}
                  onChange={handleChange}
                />
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
  else if (page === "EditResources-video") {
    return (
      <>
        <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Video </Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Image Link</Form.Label>
                <Form.Control
                  name="fName"
                  type="text"
                  placeholder="Image Link"
                  value={formValue.fName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Video Link</Form.Label>
                <Form.Control
                  name="fName"
                  type="text"
                  placeholder="Video Link"
                  value={formValue.fName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="fName"
                  type="text"
                  placeholder="Title"
                  value={formValue.fName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control
                  name="fName"
                  type="text"
                  placeholder="Text"
                  value={formValue.fName}
                  onChange={handleChange}
                />
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
  else if (page === "EditResources-file") {
    return (
      <>
        <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit File </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>File Link</Form.Label>
                <Form.Control
                  name="link"
                  type="text"
                  placeholder="File Link"
                  value={fileValue.link}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control
                  name="filename"
                  type="text"
                  placeholder="Text"
                  value={fileValue.filename}
                  onChange={handleChange}
                />
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
}
export default EditRow;
