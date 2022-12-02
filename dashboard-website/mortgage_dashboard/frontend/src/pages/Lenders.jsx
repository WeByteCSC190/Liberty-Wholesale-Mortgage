import api from "../services/api";
import * as React from "react";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/TableLenders";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";

const Lenders = () => {
  const [dataTable, setDataTable] = useState([]);
  const [logoTable, setLogoTable] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");

  let testData = [];
  let sourceImage = [];

  function getLenders() {
    const getLendersUrl = `${process.env.REACT_APP_API_URL}/api/lender/`;
    api({
      method: "GET",
      url: getLendersUrl,
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

    const getLendersLogoUrl = `${process.env.REACT_APP_API_URL}/api/lenderLogo/`;
    api({
      method: "GET",
      url: getLendersLogoUrl,
    })
      .then((response) => {
        const image = response.data;
        setLogoTable(image);
        sourceImage = image;
        console.log(image);
        if(image == null) {
          console.log("Logo not available")
        }else {
          console.log("Logo successful")
        }
        return image;
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
      //console.log(dataTable);
    });
    const filteredData = filterTable(searchValue, filterType);
    setDataTable(filteredData);
  }, [searchValue, filterType]);

  const column = [
    { heading: "Company", value: "company" },
    { heading: "Rating", value: "rating" },
    { heading: "Programs", value: "programs" },
    { heading: "Details", value: "Details" },
    { heading: "Website", value: "website" },
    

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
              dataTable.company.toLowerCase().includes(searchValue.toLowerCase()) ||
              dataTable.rating.toLowerCase().includes(searchValue.toLowerCase())  ||
              dataTable.programs.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        }
        if (filterType !== "") {
          switch (filterType) {
            case "Company":
              // console.log("filter by company")
              resolve(handleSorting("company", "asc"));
              break;
            case "Rating":
              // console.log("filter by rating")
              resolve(handleSorting("rating", "asc"));
              break;
            case "Programs":
              // console.log("filter by programs")
              resolve(handleSorting("programs", "asc"));
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
    console.log("handlesort sort field = " + sortOrder);
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
        new Moment(a.company.slice(0, 10)) - new Moment(b.company.slice(0, 10))
      );
      return new Moment(a.company.slice(0, 10)) - new Moment(b.company.slice(0, 10));
    });
    return sorted;
  };
  const filterTable = (searchValue, filterType) => {
    if (filterType !== "") {
      switch (filterType) {
        case "Company ASC":
          return handleSorting("company", "asc");
        case "Company Desc":
          return handleSorting("company", "desc");
        case "Lowest to Highest":
          return handleSorting("rating", "asc");
        case "Highest to Lowest":
          return handleSorting("rating", "desc");
          case "Programs ASC":
            return handleSorting("status", "asc");
          case "Programs DESC":
            return handleSorting("status", "desc");
        default:
          window.location.reload(false);
      }
    } else if (searchValue === "" || filterType === "") {
      return testData;
    }
    if (searchValue !== "") {
     // console.log(
     //   testData.filter((dataTable) =>
     //     dataTable.company.toLowerCase().includes(searchValue.toLowerCase())
     //   )
    //  );
      return testData.filter((dataTable) =>
        dataTable.company.toLowerCase().includes(searchValue.toLowerCase()) ||
        dataTable.ratings.toLowerCase().includes(searchValue.toLowerCase()) ||
        dataTable.programs.toLowerCase().includes(searchValue.toLowerCase())
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
            <div>
              <Search
                page={"Lenders"}
                callback1={(searchValue) => setSearchValue(searchValue)}
                callback2={(filterType) => setFilterType(filterType)}
              />
              <Table
                api="http://localhost:8000/api/lender/"
                page={"Lenders"}
                data={dataTable}
                column={column}
                columns={columns}
                image={logoTable}
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

export default Lenders;
