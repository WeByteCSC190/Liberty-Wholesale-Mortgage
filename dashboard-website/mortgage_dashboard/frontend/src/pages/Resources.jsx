import * as React from "react";
import api from "../services/api";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "../components/Table";
import CarouselBootstrap from "../components/CarouselBootstrap";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Resources = () => {
  const [fileTable, setfileTable] = useState([]);
  const [videoTable, setVideoTable] = useState([]);
  const [articleTable, setArticleTable] = useState([]);
  const getFilesUrl = `${process.env.REACT_APP_API_URL}/api/files/`;
  const getVideosUrl = `${process.env.REACT_APP_API_URL}/api/media/`;
  const getArticlesUrl = `${process.env.REACT_APP_API_URL}/api/Articles/`;
  
  const testData  =  api({
      method: "GET",
      url: getArticlesUrl,
    }).then((response) => {
        let data = response.data;
        let temp = [];
        data.map((arrayItem, arrayItemIndex, wholeArray) => {
          temp[arrayItemIndex] = { title: arrayItem.title, content: arrayItem.content };
        });
        setArticleTable(temp);
        return temp;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  

  function getFiles() {
    api({
      method: "GET",
      url: getFilesUrl,
    })
      .then((response) => {
        const data = response.data;
        setfileTable(data);
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
    function getVideos() {
    api({
      method: "GET",
      url: getVideosUrl,
    })
      .then((response) => {
        const data = response.data;
        setVideoTable(data);
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
    function getArticles() {
    api({
      method: "GET",
      url: getArticlesUrl,
    })
      .then((response) => {
        const data = response.data;
        
        let temp = [];
        data.map((arrayItem, arrayItemIndex, wholeArray) => {
          temp[arrayItemIndex] = { title: arrayItem.title, content: arrayItem.content };
        });
        setArticleTable(temp);
        return temp;
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
    getArticles();
    getFiles();
    getVideos();
  }, [true]);

  // files end
  const [showResults, setShowResults] = React.useState(false);
  const showCards = () => {
    showResults ? setShowResults(false) : setShowResults(true);
  };

  const filesCol = [
    { heading: "Link", value: "link" },
    { heading: "File Name", value: "filename" },
  ];
 
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
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "60%" , textAlign:"center",margin:"0 auto"}}>
             <CarouselBootstrap data={articleTable}/>
            </div>
            </div>
            </Row>
            <Row style={{ paddingBottom: "20px" }}>
              <h1>Videos</h1>
              {(videoTable.slice(0, 3)).map((item) => {
                return (
                  <Col sm={4}>
                    <Card title={item.title} desc={item.desc} link={item.link} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Button
                variant="primary"
                style={{ width: "200px", margin: "20px auto" }}
                onClick={showCards}
              >
                {showResults ? "-" : "+"}
              </Button>
            </Row>

            {showResults ? (
              <Row style={{ paddingBottom: "20px" }}>
                {(videoTable.slice(3,)).map((item) => {
                return (
                  <Col sm={4}>
                    <Card title={item.title} desc={item.desc} link={item.link} />
                  </Col>
                );
              })}
              </Row>
            ) : null}

            <Row style={{ paddingBottom: "20px" }}>
              <h1>Files</h1>
              <Table
                url={getFilesUrl}
                page="EditResources-file"
                data={fileTable}
                column={filesCol}
              />
            </Row>
          </Container>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  )
// })
};

export default Resources;
