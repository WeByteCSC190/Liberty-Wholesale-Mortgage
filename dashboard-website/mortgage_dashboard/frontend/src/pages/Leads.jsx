import * as React from "react";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import api from "../services/api";

const Leads = () => {
  const [dataTable, setDataTable] = useState([]);
  // Notes Data
  const [dataNotes, setDataNotes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const getLeadsUrl = `${process.env.REACT_APP_API_URL}/api/leads/`;
  let testData = [];

  function getLeads() {
    api({
      method: "GET",
      url: getLeadsUrl,
    })
      .then((response) => {
        const data = response.data;
        setDataTable(data);
        testData = data;
        return data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    const getLeadsNotes = `${process.env.REACT_APP_API_URL}/api/leadnote/`;
    api({
      method: "GET",
      url: getLeadsNotes,
    })
      .then((response) => {
        const notes = response.data;
        setDataNotes(notes);
        console.log("lead notes are :");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  useEffect(() => {
    getLeads();
    fetchData(searchValue, filterType).then((dataTable) => {
      setDataTable(dataTable);
      // console.log(dataTable);
    });
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);

  const column = [
    { heading: "Case ID ", value: "caseId" },
    { heading: "Date", value: "date" },
    { heading: "First Name", value: "fName" },
    { heading: "Last Name", value: "lName" },
    { heading: "Credit Score", value: "creditScore" },
    { heading: "Phone", value: "phone_num" },
    { heading: "Email", value: "email" },
    { heading: "Status", value: "status" },
    { heading: "Details", value: "Details" },
    { heading: "AddRow", value: "AddLead" },
  ];

  const fetchData = (searchValue, filterType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (searchValue !== "") {
          resolve(
            testData.filter(
              (dataTable) =>
                dataTable.fName
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                dataTable.lName
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
            )
          );
        }
        if (filterType !== "") {
          switch (filterType) {
            case "First Name ASC":
              resolve(handleSorting("fName", "asc"));
              break;
            case "First Name Desc":
              resolve(handleSorting("fName", "desc"));
              break;
            case "Last Name ASC":
              resolve(handleSorting("lName", "asc"));
              break;
            case "Last Name DESC":
              resolve(handleSorting("lName", "desc"));
              break;
            case "Status ASC":
              resolve(handleSorting("status", "asc"));
              break;
            case "Status DESC":
              resolve(handleSorting("status", "desc"));
              break;
            case "Date":
              resolve(handleSortingDate());
              break;
            default:
              window.location.reload(false);
              break;
          }
        } else if (searchValue === "" || filterType === "") {
          resolve(testData);
        }
      }, 1000);
    });
  };
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...dataTable].sort((a, b) => {
        return (
          a[sortField].localeCompare(b[sortField], "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      return sorted;
    }
  };
  const handleSortingDate = () => {
    const sorted = [...dataTable].sort((a, b) => {
      console.log(
        new Moment(a.date.slice(0, 10)) - new Moment(b.date.slice(0, 10))
      );
      return new Moment(a.date.slice(0, 10)) - new Moment(b.date.slice(0, 10));
    });
    return sorted;
  };

  const filterTable = (searchValue, filterType) => {
    if (filterType !== "") {
      switch (filterType) {
        case "First Name ASC":
          return handleSorting("fName", "asc");
        case "First Name Desc":
          return handleSorting("fName", "desc");
        case "Last Name ASC":
          return handleSorting("lName", "asc");
        case "Last Name DESC":
          return handleSorting("lName", "desc");
        case "Status ASC":
          return handleSorting("status", "asc");
        case "Status DESC":
          return handleSorting("status", "desc");
        case "Date ASC":
          return handleSortingDate();
        case "Date DESC":
          return handleSortingDate();
        default:
          window.location.reload(false);
      }
    } else if (searchValue === "" || filterType === "") {
      return testData;
    }
    if (searchValue !== "") {
      // console.log(testData.filter(dataTable => dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
      // ))
      return testData.filter(
        (dataTable) =>
          dataTable.fName.toLowerCase().includes(searchValue.toLowerCase()) ||
          dataTable.lName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="Header">
          <Navbar />
        </div>
        <div className="Content">
          <Container className="page-format">
            <p className="Page-Title">Leads</p>
            <div>
              <Search
                callback1={(searchValue) => setSearchValue(searchValue)}
                callback2={(filterType) => setFilterType(filterType)}
              />
              <Table
                api="http://localhost:8000/api/leads/"
                page={"Leads"}
                data={dataTable}
                column={column}
                notes={dataNotes}
              />
            </div>
          </Container>
        </div>
        <div className="Footer">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leads;
