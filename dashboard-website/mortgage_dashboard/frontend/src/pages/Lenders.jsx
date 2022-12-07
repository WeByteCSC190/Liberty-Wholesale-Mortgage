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
    { heading: "Details", value: "Details" },
    { heading: "Company", value: "company" },
    { heading: "Programs", value: "programs" },
    { heading: "", value: ""}, 
    { heading: "Rating", value: "rating" },
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
            case "Company ASC":
              resolve(handleSorting("company", "asc"));
              break;
            case "Company DESC":
              resolve(handleSorting("company", "desc"));
              break;
            case "Rating A":
              resolve(
                testData.filter((dataTable) =>
                  dataTable.rating.toLowerCase().includes("A".toLowerCase())
                )
              );
              break;
            case "Rating A-":
                resolve(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("A-".toLowerCase())
                  )
                );
              break;
              case "Rating B+":
                resolve(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("B+".toLowerCase())
                  )
                );
                break;
            case "Rating B":
                resolve(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("B".toLowerCase())-dataTable.rating.toLowerCase().includes("B+".toLowerCase())
                  )
                );
              break;
            case "Rating C":
                resolve(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("C".toLowerCase())
                  )
                );
              break;
              case "Rating U":
                resolve(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("U".toLowerCase())
                  )
                );
                break;
            case "FHA":
              console.log("filter by programs")
              resolve(
                  testData.filter((dataTable) =>
                    dataTable.programs.toLowerCase().includes("FHA".toLowerCase())
                  )
                );
              break;
            case "VA":
              console.log("filter by programs")
              resolve(
                  testData.filter((dataTable) =>
                    dataTable.programs.toLowerCase().includes("VA".toLowerCase())
                  )
                );
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
  const filterTable = (searchValue, filterType) => {
    if (filterType !== "") {
      switch (filterType) {
        case "Company ASC":
          return handleSorting("company", "asc");
        case "Company DESC":
          return handleSorting("company", "desc");
        case "Rating A":
          return (
                testData.filter((dataTable) =>
                  dataTable.rating.toLowerCase().includes("A".toLowerCase())
                )
              );
        case "Rating A":
              return(
                testData.filter((dataTable) =>
                  dataTable.rating.toLowerCase().includes("A".toLowerCase())
                )
              );
            case "Rating A-":
                return(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("A-".toLowerCase())
                  )
                );
              case "Rating B+":
                return(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("B+".toLowerCase())
                  )
                );
            case "Rating B":
                return(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("B".toLowerCase())-dataTable.rating.toLowerCase().includes("B+".toLowerCase())
                  )
                );
            case "Rating C":
                return(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("C".toLowerCase())
                  )
                );
              case "Rating U":
                return(
                  testData.filter((dataTable) =>
                    dataTable.rating.toLowerCase().includes("U".toLowerCase())
                  )
                );
            case "FHA":
              console.log("filter by programs")
              return(
                  testData.filter((dataTable) =>
                    dataTable.programs.toLowerCase().includes("FHA".toLowerCase())
                  )
                );
            case "VA":
              console.log("filter by programs")
              return(
                  testData.filter((dataTable) =>
                    dataTable.programs.toLowerCase().includes("VA".toLowerCase())
                  )
                );
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
