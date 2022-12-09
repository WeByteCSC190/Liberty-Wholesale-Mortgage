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
const AdminTableComponent = ({ url, page, data, column, notes }) => {
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
        if (columnItem.heading === "AddRow") {
          return (
            <th key={page + "addRow" + index}>
              <ActionBtn page={`${page}`} rowData={item} index={index} />
            </th>
          );
        } else if (columnItem.heading === "Details") {
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
        if (columnItem.heading === "") {
          return (
            <>
              <th>
                <ColorIcons choice={item.status} />
              </th>
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
          return (
            <td key={page + "_" + columnItem.value + "_row" + index}>
              {item[`${columnItem.value}`]}
            </td>
          );
        }
      })}
    </tr>
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

export default AdminTableComponent;
