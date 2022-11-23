import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "../components/Table";
import AnnouncementsWidget from "../components/AnnouncementsWidget";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Resources = () => {
  const [ResourceDataTable, setResourceDataTable] = useState([]);
  const [FileDataTable, setFileDataTable] = useState([]);
  const [VideoDataTable, setVideoDataTable] = useState([]);
  const [AnnoucementsDataTable, setAnnoucementsDataTable] = useState([]);
  const getResoucreUrl = `${process.env.REACT_APP_API_URL}/api/resources/`;
  const getFileUrl = `${process.env.REACT_APP_API_URL}/api/files/`;
  const getVideoUrl = `${process.env.REACT_APP_API_URL}/api/media/`;
  const getAnnoucementsUrl = `${process.env.REACT_APP_API_URL}/api/Annoucements/`;
  function getResource() {
    axios({
      method: "GET",
      url: getResoucreUrl,
    })
      .then((response) => {
        const data = response.data;
        setResourceDataTable(data);
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
  function getFile() {
    axios({
      method: "GET",
      url: getFileUrl,
    })
      .then((response) => {
        const data = response.data;
        setFileDataTable(data);
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
  function getVideo() {
    axios({
      method: "GET",
      url: getVideoUrl,
    })
      .then((response) => {
        const data = response.data;
        setVideoDataTable(data);
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
  function getAnnoucements() {
    axios({
      method: "GET",
      url: getAnnoucementsUrl,
    })
      .then((response) => {
        const data = response.data;
        setAnnoucementsDataTable(data);
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
    getResource();
    getFile();
    getVideo();
    getAnnoucements();
  }, []);

  // files column
  const annoucementsColumn = [
    { heading: "Date", value: "date" },
    { heading: "Annoucements", value: "content" },
  ];
  const fileColumn = [
    { heading: "File id", value: "id" },
    { heading: "File", value: "file" },
    { heading: "date", value: "date" },
  ];

  const videoColumn = [
    { heading: "Video id", value: "id" },
    { heading: "Video", value: "video" },
    { heading: "date", value: "date" },
    { heading: "User", value: "user" },
  ];
  const resourcesColumn = [
    { heading: "id", value: "id" },
    { heading: "name", value: "name" },
    { heading: "media", value: "media" },
    { heading: "files", value: "files" },
    { heading: "announcements", value: "announcements" },
    { heading: "news", value: "news" },
    { heading: "video", value: "video" },
  ];
  // files end
  const [showResults, setShowResults] = React.useState(false);
  const showCards = () => {
    showResults ? setShowResults(false) : setShowResults(true);
  };

  // Carousel data
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      filename: "1200px-GoldenGateBridge-001.jpg",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      filename: "Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      filename: "San Francisco",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      filename: "Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      filename: "scotland_travel_4x3.jpg",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      filename: "Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      filename: "san_francisco_780x520px.ashx",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      filename: "Scotland.jpg",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      filename: "summer-7.jpg",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      filename: "summer-8.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      filename: "GoldenGateBridge-001.jpg",
    },
  ];

  const filenameStyle = {
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
          <Container className="page-style">
            <p className="Page-Title">Resources</p>
            <Row style={{ paddingBottom: "70px" }}>
              <h1>News and Articles</h1>
              <Carousel
                data={data}
                time={6000}
                width="900px"
                height="500px"
                filenameStyle={filenameStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                filenamePosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="transparent"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                showNavBtn={true}
                style={{
                  textAlign: "center",

                  // maxWidth: "850px"/,
                  margin: "0px",
                }}
              />
            </Row>
            <Row style={{ paddingBottom: "20px" }}>
              <h1>Videos</h1>
              <Col sm={4}>
                <Card />
              </Col>
              <Col sm={4}>
                <Card />
              </Col>
              <Col sm={4}>
                <Card />
              </Col>
            </Row>
            <Row>
              <Button
                variant="info"
                style={{ width: "200px", margin: "20px auto" }}
                onClick={showCards}
              >
                {showResults ? "-" : "+"}
              </Button>
            </Row>

            {showResults ? (
              <Row style={{ paddingBottom: "20px" }}>
                <Col sm={4}>
                  <Card />
                </Col>
                <Col sm={4}>
                  <Card />
                </Col>
                <Col sm={4}>
                  <Card />
                </Col>
              </Row>
            ) : null}

            <Row style={{ paddingBottom: "20px" }}>
              <h1>Files</h1>
              <Table
                api="http://127.0.0.1:8000/api/files/"
                page={"Files"}
                data={FileDataTable}
                column={fileColumn}
              />
            </Row>
          </Container>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Resources;
