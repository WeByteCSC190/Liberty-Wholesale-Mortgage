import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
const Search=({callback1, callback2})=> {  
  const [innerValue, setInnerValue] = useState("");
  const [filterValue, setFilterValue]=useState("");
  const handleSubmit = e => {
    e.preventDefault()
    callback1(innerValue)
  }
  const handleFilter = e => {
    e.preventDefault()
    setFilterValue(e.target.value)
    var clicked = document.querySelectorAll(".btn-filter")
    for (var i = 0; i < clicked.length; i++) 
        clicked[i].classList.remove('btn-filter')
    e.target.className += ' btn-filter'
    console.log(filterValue)
    setFilterValue(e.target.value)
    callback2(filterValue)
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
              <input value="Date" type="button"
            onClick={handleFilter} className="btn btn-primary" />
        </Col>
        <Col>
             <input value="First Name" type="button"
            onClick={handleFilter} className="btn btn-primary" />
        </Col>
        <Col>
             <input value="Last Name" type="button"
            onClick={handleFilter} className="btn btn-primary" />
        </Col>
        <Col>
             <input value="Status" type="button"
            onClick={handleFilter} className="btn btn-primary" />
        </Col>
        <Col>
             <input value="Reset" type="button"
            onClick={handleFilter} className="btn btn-primary" />
        </Col>
    </Row>
    </Container>
      </div>
    )
}
export default Search;