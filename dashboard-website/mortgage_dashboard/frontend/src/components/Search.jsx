import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
const Search=({callback})=> {  
  const [innerValue, setInnerValue]=useState("");
  const handleSubmit = e => {
    e.preventDefault()
    callback(innerValue)
  }
    return (
      <div className="container mt-5 search-container">
        <Container className="mt-4">
          <form onSubmit={handleSubmit}>
        <Row>
            <Col sm={10}>
            <div>
            <input
            type="text"
            className="form-control"
            value={innerValue}
            onChange={(e)=> setInnerValue(e.target.value)}
            />
            </div>
        
        </Col>
        
        <Col sm={2}>
            <button  className="btn btn-primary"><FontAwesomeIcon icon={Icons.faMagnifyingGlass}  /></button>
        </Col>
            </Row>
            </form>
    </Container>
    <Container className="mt-4 mb-4">
    <Row  xs="auto" >
        <Col className="mt-2">
            Filters:
        </Col>
        <Col>
            <button className="btn btn-primary">DATE</button>
        </Col>
        <Col>
            <button className="btn btn-primary">FIRST NAME</button>
        </Col>
        <Col>
            <button className="btn btn-primary">LAST NAME</button>
        </Col>
        <Col>
            <button className="btn btn-primary">STATUS</button>
        </Col>
        <Col>
            <button className="btn btn-light">Reset</button>
        </Col>
    </Row>
    </Container>
      </div>
    )
}
export default Search;