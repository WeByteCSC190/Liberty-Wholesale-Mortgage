import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../components/NavbarAdmin.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "../../components/Table";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

const EditResources = () => {
  // files start
  const [fileTable, setfileTable] = useState([]);
  const getFilesUrl = `${process.env.REACT_APP_API_URL}/api/files/`;
  function getFiles() {
    axios({
      method: "GET",
      url: getFilesUrl,
    })
      .then((response) => {
        const data = response.data;
        setfileTable(data);
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
    getFiles();
  }, [true]);

  const column = [
    { heading: "Image Link", value: "image" },
    { heading: "Text", value: "caption" },
    { heading: "AddRow", value: "EditResources" },
  ];
  const column2 = [
    { heading: "Image Link", value: "link" },
    { heading: "File Name", value: "filename" },
    { heading: "AddRow", value: "EditResources" },
  ];
  const column1 = [
    { heading: "Video Link", value: "image" },
    { heading: "Image Link", value: "image" },
    { heading: "Title", value: "caption" },
    { heading: "Text", value: "caption" },
    { heading: "AddRow", value: "EditResources" },
  ];
  // files end
  const [showResults, setShowResults] = React.useState(false);
  const showCards = () => {
    showResults ? setShowResults(false) : setShowResults(true);
  };

  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Another caption",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "The last one",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="Header">
          <Navbar />
        </div>
        <div className="Content">
          <Container className="page-format">
            <p className="Page-Title">Resources</p>

            <Container>
              <Row style={{ paddingBottom: "70px" }}>
                <h1>News and Articles</h1>
                <Table
                  api="http://localhost:8000/api/borrowers/"
                  page={"EditResources-carousel"}
                  data={data}
                  column={column}
                />
              </Row>
              <Row style={{ paddingBottom: "20px" }}>
                <h1>Videos</h1>
                <Table
                  api="http://localhost:8000/api/borrowers/"
                  page={"EditResources-video"}
                  data={data}
                  column={column1}
                />
              </Row>

              <Row style={{ paddingBottom: "20px" }}>
                <h1>Files</h1>
                <Table
                  api="http://localhost:8000/api/files/"
                  page={"EditResources-file"}
                  data={fileTable}
                  column={column2}
                />
              </Row>
            </Container>
          </Container>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default EditResources;
