import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import api from "../../services/api";
function Confirmation({ btn, cID, title, message, apiUrl, rowData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    if (btn == "Move To Leads") {
      var formDataLead = new FormData();
      formDataLead.append("caseId", rowData.caseId);
      formDataLead.append("fName", rowData.fName);
      formDataLead.append("lName", rowData.lName);
      formDataLead.append("email", rowData.email);
      formDataLead.append("phone_num", rowData.phone_num);
      formDataLead.append("status", 1);
      formDataLead.append("creditScore", rowData.creditScore);
      try {
        let urlLead = `${process.env.REACT_APP_API_URL}/api/leads/`;
        axios({
          method: "post",
          url: urlLead,
          data: formDataLead,
        });
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
    if (btn == "Move To Borrowers") {
      var formDataB = new FormData();
      formDataB.append("caseId", rowData.caseId);
      formDataB.append("fName", rowData.fName);
      formDataB.append("lName", rowData.lName);
      formDataB.append("email", rowData.email);
      formDataB.append("phone_num", rowData.phone_num);
      formDataB.append("status", 1);
      formDataB.append("creditScore", rowData.creditScore);
      try {
        let urlBorrower = `${process.env.REACT_APP_API_URL}/api/borrowers/`;
        axios({
          method: "post",
          url: urlBorrower,
          data: formDataB,
        });
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
    // Delete the row
    console.log(apiUrl);
    api({
      method: "DELETE",
      url: apiUrl + cID + "/",
    })
      .then((response) => {
        window.location.reload(false);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };
  return (
    <>
      <Dropdown.Item onClick={handleShow}>{btn}</Dropdown.Item>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Confirmation;
