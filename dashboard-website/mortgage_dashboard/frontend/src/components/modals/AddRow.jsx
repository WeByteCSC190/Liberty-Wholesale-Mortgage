import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import api from "../../services/api";

function AddRow({ url, page }) {
  // For Leads, Borrowers, and Resources Table
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState([]);

  if (page === "Leads") {
    url = `${process.env.REACT_APP_API_URL}/api/leads/`;
  } else if (page === "Borrowers") {
    url = `${process.env.REACT_APP_API_URL}/api/borrowers/`;
  } else if (page === "EditResources-file") {
    url = `${process.env.REACT_APP_API_URL}/api/files/`;
  } else if (page === "EditResources-video") {
    url = `${process.env.REACT_APP_API_URL}/api/media/`;
  } else if (page === "EditResources-carousel") {
    url = `${process.env.REACT_APP_API_URL}/api/Articles/`;
  }

  const [formValue, setformValue] = React.useState({
    caseId: "",
    fName: "",
    lName: "",
    email: "",
    phone_num: "",
    status: "",
    creditScore: "",
    status_check: false,
  });
  const [fileValue, setfileValue] = React.useState({
    link: "",
    filename: "",
  });
  const [videoValue, setvideoValue] = React.useState({
    link: "",
    title: "",
    desc: "",
  });
  const [articleValue, setarticleValue] = React.useState({
    title: "",
    content: "",
  });
  useEffect(() => {
    const getStatus = `${process.env.REACT_APP_API_URL}/api/status/`;
    async function fetchData() {
      // Fetch data
      api({
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
    formData.append("caseId", formValue.caseId);
    formData.append("fName", formValue.fName);
    formData.append("lName", formValue.lName);
    formData.append("email", formValue.email);
    formData.append("phone_num", formValue.phone_num);
    formData.append("status", formValue.status);
    formData.append("creditScore", formValue.creditScore);

    console.log(Object.fromEntries(formData));
    try {
      const response = api({
        method: "post",
        url: url,
        data: formData,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitFile = () => {
    // store the states in the form data
    var formData = new FormData();
    formData.append("link", fileValue.link);
    formData.append("filename", fileValue.filename);
    try {
      const response = api({
        method: "post",
        url: url,
        data: formData,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitVideo = () => {
    // store the states in the form data
    var formData = new FormData();
    formData.append("link", videoValue.link);
    formData.append("title", videoValue.title);
    formData.append("desc", videoValue.desc);
    try {
      const response = api({
        method: "post",
        url: url,
        data: formData,
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitArticle = () => {
    // store the states in the form data
    var formData = new FormData();
    formData.append("content", videoValue.content);
    formData.append("title", videoValue.title);
    try {
      const response = api({
        method: "post",
        url: url,
        data: formData,
      });
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
    setfileValue({
      ...fileValue,
      [event.target.name]: event.target.value,
    });
    setvideoValue({
      ...videoValue,
      [event.target.name]: event.target.value,
    });
    setarticleValue({
      ...articleValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setShow(false);
    setformValue({
      ...formValue,
      caseId: "",
      fName: "",
      lName: "",
      email: "",
      phone_num: "",
      status: "",
      creditScore: "",
    });
    setfileValue({
      ...fileValue,
      link: "",
      filename: "",
    });
    // window.location.reload(false);
  };
  const handleShow = () => setShow(true);
  if (page === "Borrowers" || page === "Leads") {
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
                <Form.Label>Case ID</Form.Label>
                <Form.Control
                  name="caseId"
                  type="text"
                  placeholder="Enter Case ID"
                  value={formValue.caseId}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

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

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Select Status</Form.Label>
                <Form.Select
                  name="status"
                  aria-label="Default select example"
                  value={formValue.status}
                  onChange={handleChange}
                >
                  <option key="0" value=""></option>
                  {status.map((option) => {
                    return (
                      <option key={option.id} value={option.id}>
                        {option.status}
                      </option>
                    );
                  })}
                </Form.Select>
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
  } else if (page === "EditResources-file") {
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
                <Form.Label>File Link</Form.Label>
                <Form.Control
                  name="link"
                  type="text"
                  value={fileValue.link}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  File Link has to be a valid URL.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Filename</Form.Label>
                <Form.Control
                  name="filename"
                  type="text"
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
            <Button variant="primary" onClick={handleSubmitFile}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else if (page === "EditResources-carousel") {
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
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Tiltle"
                  value={articleValue.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control
                  name="content"
                  type="text"
                  placeholder="Content"
                  value={articleValue.content}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmitArticle}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else if (page === "EditResources-video") {
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
                <Form.Label>Video Link</Form.Label>
                <Form.Control
                  name="link"
                  type="text"
                  placeholder="Video Link"
                  value={videoValue.link}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={videoValue.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="desc"
                  type="text"
                  placeholder="Text"
                  value={videoValue.desc}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmitVideo}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else if (page === "Lenders") {
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
              <Form.Label>Case ID</Form.Label>
              <Form.Control
                name="caseId"
                type="text"
                placeholder="Enter Case ID"
                value={formValue.caseId}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Select Status</Form.Label>
              <Form.Select
                name="status"
                aria-label="Default select example"
                value={formValue.status}
                onChange={handleChange}
              >
                <option>Open to select status</option>
                <option value="Closed">Closed</option>
                <option value="Application Complete">
                  Application Complete
                </option>
                <option value="In progress">In progress </option>
              </Form.Select>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="">
          <Form.Check value={formValue.status_check}
            onChange={handleChange} type="checkbox" label="The borrower is approved" />
        </Form.Group> */}
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
    </>;
  }
}

export default AddRow;
