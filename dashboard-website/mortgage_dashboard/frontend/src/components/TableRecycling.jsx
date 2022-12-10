import Table from "react-bootstrap/Table";
import AddRow from "../components/modals/AddRow";
import ActionBtn from "../components/buttons/Action";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../services/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColorIcons from "./ColorIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  faTrash,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
const TableRecyclingComponent = ({ url, page, data, column, notes }) => {
  const [noteText, setNoteText] = useState("");
  const [status, setStatus] = useState([]);
  useEffect(() => {
    const getStatus = "http://localhost:8000/api/status/";
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

  return (
    <Table className="Table" responsive hover>
      <thead>
        <tr className="table-heading">
          {column.map((item, index) => (
            <TableHeadItem
              key={page + "heading" + index}
              item={item}
              url={url}
              page={page}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow
            key={page + "tableRow" + index}
            page={page}
            item={item}
            column={column}
            notes={notes}
            index={index}
            status={status}
          />
        ))}

        <tr className="last-table-row">
          Showing {data.length} out of {data.length} results
        </tr>
      </tbody>
    </Table>
  );
};
const TableHeadItem = ({ item, url, page }) => {
  if (item.heading === "AddRow") {
    return (
      <th>
        <AddRow page={`${page}`} url={`${url}`} />
      </th>
    );
  } else {
    return <th>{`${item.heading}`}</th>;
  }
};

const TableRow = ({
  page,
  item,
  column,
  notes,
  index,
  expandedRows,
  handleEpandRow,
  expandState,
  handleAddNote,
  handleDeleteNote,
  setNoteText,
  status,
}) => (
  <>
    <tr id={index}>
      {column.map((columnItem) => {
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split(".");
          return <td key={page + index}>{item[itemSplit[0]][itemSplit[1]]}</td>;
        }

        if (columnItem.heading === "Details") {
          return (
            <th key={page + "detail" + index}>
              {" "}
              <Button
                variant="light"
                value={index}
                onClick={(event) => handleEpandRow(event, item.caseId)}
              >
                {expandState[item.caseId] ? arrowDown(false) : arrowDown(true)}
              </Button>{" "}
            </th>
          );
        } else if (columnItem.heading === "Link") {
          return (
            <td key={page + columnItem.heading + index}>
              {" "}
              <Button
                variant="link"
                onClick={(e) =>
                  window.open(item[`${columnItem.value}`], "_blank")
                }
              >
                Open
              </Button>
              <Button
                variant="light"
                onClick={(e) =>
                  window.open(item[`${columnItem.value}`], "_blank")
                }
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </td>
          );
        }
        if (columnItem.heading == "") {
          console.log("here");
          return (
            <>
              <td>
                <ColorIcons choice={item.status} />
              </td>
            </>
          );
        } else {
          if (columnItem.heading === "Date") {
            return (
              <td key={page + "date" + index}>
                {item[`${columnItem.value}`].slice(0, 10)}
              </td>
            );
          }
          if (columnItem.heading === "Status") {
            status.find((element) => {
              if (element.id === item[`${columnItem.value}`]) {
                item[`${columnItem.value}`] = element.status;
                //  return <td key={page + "_" + columnItem.value + "_row" + index}>{element.status}</td>
              }
            });
          }
          return (
            <td key={page + "_" + columnItem.value + "_row" + index}>
              {item[`${columnItem.value}`]}
            </td>
          );
        }
      })}
    </tr>
    <>
      {expandedRows.includes(item.caseId) ? (
        <tr id={index + "_note"}>
          <td
            colspan="12"
            style={{ backgroundColor: "#343A40", color: "#FFF" }}
          >
            {" "}
            Previsou Notes:
            {notes.map((note) => {
              if (page === "Borrowers") {
                if (note.borrower === item.caseId) {
                  return (
                    <>
                      <Row style={{ margin: "12px" }} key={page + note + index}>
                        {" "}
                        -
                        <Col xs="auto">
                          <div>
                            <h6>
                              {note.borrowernote}
                              <small> ({note.created_on.slice(0, 10)})</small>
                            </h6>
                          </div>
                        </Col>
                        <Col xs lg="2">
                          <Button
                            onClick={(event) => handleDeleteNote(note.id)}
                            variant="outline-danger"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </Col>
                      </Row>
                    </>
                  );
                }
              } else if (page === "Leads") {
                if (note.lead === item.caseId) {
                  return (
                    <>
                      <Row style={{ margin: "12px" }} key={page + note + index}>
                        {" "}
                        -
                        <Col xs="auto">
                          <div>
                            <h6>
                              {note.leadnote}
                              <small> ({note.created_on.slice(0, 10)})</small>
                            </h6>
                          </div>
                        </Col>
                        <Col xs lg="2">
                          <Button
                            onClick={(event) => handleDeleteNote(note.id)}
                            variant="outline-danger"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </Col>
                      </Row>
                    </>
                  );
                }
              }
            })}
            <Form>
              <Form.Group className="mb-3" controlId="notesTextarea">
                <Form.Label style={{ marginTop: "17px" }}>
                  Add a Note:{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setNoteText(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="outline-light"
                onClick={(event) => handleAddNote(item.caseId)}
              >
                Save
              </Button>
            </Form>
          </td>
        </tr>
      ) : null}
    </>
  </>
);

function arrowDown(condition) {
  if (condition) {
    return <FontAwesomeIcon color="black" icon={Icons.faAngleRight} />;
  } else {
    return (
      <FontAwesomeIcon
        className="fa-rotate-90"
        color="black"
        icon={Icons.faAngleRight}
      />
    );
  }
}

export default TableRecyclingComponent;