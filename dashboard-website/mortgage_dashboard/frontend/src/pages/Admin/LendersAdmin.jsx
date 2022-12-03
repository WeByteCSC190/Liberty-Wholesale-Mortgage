import axios from "axios";
import * as React from "react";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import Navbar from "../../components/NavbarAdmin";
import Search from "../../components/Search";
import TableLenders from "../../components/TableLenders";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";

const LendersAdmin = () => {
  const [dataTable, setDataTable] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");
  const getLendersUrl = `${process.env.REACT_APP_API_URL}/api/lender/`;
  const getLendersLogoUrl = `${process.env.REACT_APP_API_URL}/api/lenderLogo/`;
  let testData = [];

  function getLenders() {
    axios({
      method: "GET",
      url: getLendersUrl,
      getLendersLogoUrl,
    })
      .then((response) => {
        const data = response.data;
        setDataTable(data);
        testData = data;
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
  }

  function getLogo() {
    axios({
      method: "GET",
      url: getLendersLogoUrl,
    })
      .then((response) => {
        const data = response.data;
        setDataTable(data);
        testData = data;
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
  }

  useEffect(() => {
    getLenders();
    fetchData(searchValue, filterType).then((dataTable) => {
      setDataTable(dataTable);
      console.log(dataTable);
    });
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);

  const column = [
    { heading: "Details", value: "Details" },
    { heading: "Company", value: "company" },
    { heading: "Programs", value: "programs" },
    { heading: "", value: ""}, 
    { heading: "Rating", value: "rating" },
    { heading: "Website", value: "website" },
    { heading: "AddRow", value: "AddLender" },
  ];

  const columns = [
    { heading: "Logo", value: "logo" },
    { heading: "FHA ID", value: "lender_FHA_ID" },
    { heading: "VA ID", value: "lender_VA_ID" },
    { heading: "Account Executive", value: "account_executive" },
    { heading: "Phone Number", value: "phone_num" },
    { heading: "Email", value: "email" },
  ];

  const fetchData = (searchValue, filterType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (searchValue !== "") {
          resolve(
            testData.filter((dataTable) =>
              dataTable.fName.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        }
        if (filterType !== "") {
          switch (filterType) {
            case "Company":
              // console.log("filter by first name")
              resolve(handleSorting("company", "asc"));
            case "Rating":
              // console.log("filter by last name")
              resolve(handleSorting("rating", "asc"));
            case "Programs":
              // console.log("filter by date")
              resolve(handleSorting("programs", "asc"));
              resolve(testData);
            default:
              resolve(testData);
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
      console.log(a.date);
      return new Moment(a.date) - new Moment(b.date);
    });
    return sorted;
  };
  const filterTable = (searchValue, filterType) => {
    console.log("filterTable function called");
    if (filterType !== "") {
      switch (filterType) {
        case "First Name":
          console.log("filter by first name");
          return handleSorting("fName", "asc");
        case "Last Name":
          console.log("filter by last name");
          return handleSorting("lName", "asc");
        case "Date":
          console.log("filter by date");
        // return handleSortingDate()

        default:
          return testData;
      }
    } else if (searchValue === "" || filterType === "") {
      return testData;
    }
    if (searchValue !== "") {
      console.log(
        testData.filter((dataTable) =>
          dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      return testData.filter((dataTable) =>
        dataTable.fname.toLowerCase().includes(searchValue.toLowerCase())
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
            <p className="Page-Title">Lenders</p>
            <div className="Lenders">
              <div>
                <Search
                  page={"Lenders"}
                  callback1={(searchValue) => setSearchValue(searchValue)}
                  callback2={(filterType) => setFilterType(filterType)}
                />
                <TableLenders
                  api="http://localhost:8000/api/lender/"
                  page={"Lenders"}
                  data={dataTable}
                  column={column}
                  columns={columns}
                />
              </div>
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

export default LendersAdmin;
