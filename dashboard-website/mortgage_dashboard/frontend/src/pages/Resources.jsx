import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from "../components/Table";
import AnnouncementsWidget from "../components/AnnouncementsWidget";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
const Resources = () => {

// files start
  const [dataTable, setDataTable] = useState([]);
  const getFilesUrl = "http://localhost:8000/api/borrowers/";
  function getFiles() {
  axios({
      method: "GET",
      url:getFilesUrl,
    }).then((response)=>{
      const data = response.data;
      setDataTable(data)
      console.log(data)
      return data
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })
}

  useEffect(() => {
    getFiles();
  });


  const column = [
    { heading: 'File Name', value: 'fName' },
    { heading: 'Link', value: 'lName' },
    {heading: 'AddRow', value:'AddFile'}
  ]
  // files end
    const [showResults, setShowResults] = React.useState(false)
  const showCards = () => {
    showResults ? setShowResults(false) : setShowResults(true)
  }
  
   const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "<div>San Francisco</div>",
     },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "<div>Negin</div>",
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
    <div className="Header">
      <Navbar />   
    </div>
    <p className="Page-Title">Resources</p>
      {/* <div className="Content" >  */}
      <Container>
        <Row style={{ paddingBottom: "70px" }}>
           <h1>News and Articles</h1>
              <Carousel
            data={data}
            time={6000}
            width="900px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
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
        <Button variant="info" style={{width:"200px", margin:"20px auto"}} onClick={showCards} >
          {showResults ? "-":"+"}
        </Button>
        </Row>
        
            { showResults ? <Row style={{paddingBottom:"20px"}}>
          <Col sm={4}>
            <Card />
            </Col>
          <Col sm={4}>
             <Card />
            </Col>
          <Col sm={4}>
             <Card />
            </Col>
        </Row> : null }    
        
        <Row style={{ paddingBottom: "20px" }}>
          <h1>Files</h1>
         <Table api="http://localhost:8000/api/borrowers/"  page={"Files"} data={dataTable} column={column} />
         
        </Row>
      </Container>
          
    {/* </div> */}
    </>
  )
}

export default Resources;

