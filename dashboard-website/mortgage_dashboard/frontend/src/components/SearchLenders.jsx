import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";

const SearchLenders = ({callback1, callback2, button1, button2, button3, limit }) => {  
  const [innerValue, setInnerValue] = useState("");
  const [filterValue, setFilterValue]=useState("");
  const handleSubmit = e => {
    e.preventDefault()
    callback1(innerValue)
  }
  const handleFilter = e => {
    e.preventDefault()
    console.log(e.target)
    setFilterValue(e.target.value)
    var clicked = document.querySelectorAll(".btn-filter")
    for (var i = 0; i < clicked.length; i++) 
        clicked[i].classList.remove('btn-filter')
    e.target.className += ' btn-filter'
    console.log(filterValue)
    // setFilterValue(e.target.value)
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
            <button className="btn btn-primary"><FontAwesomeIcon icon={Icons.faMagnifyingGlass}  /></button>
        </Col>
            </Row>
            </form>
    </Container>
    <Container className="mt-4 mb-4">
    <Row  xs="auto" >
        <Col className="mt-2">
            Search By:
        </Col>
        <Col>
          <DropdownButton value={button1} id={button1} title="Company">
              <Dropdown.Item value="company" onClick={handleFilter}>A-Z</Dropdown.Item>
              <Dropdown.Item value="company" onClick={handleFilter}>Z-A</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
            <DropdownButton id={button2} title="Rating">
              <Dropdown.Item  value="rating" onClick={handleFilter}>A</Dropdown.Item>
              <Dropdown.Item  value="rating" onClick={handleFilter}>A-</Dropdown.Item>
              <Dropdown.Item  value="rating" onClick={handleFilter}>B+</Dropdown.Item>
              <Dropdown.Item  value="rating" onClick={handleFilter}>B</Dropdown.Item>
              <Dropdown.Item  value="rating" onClick={handleFilter}>C</Dropdown.Item>
              <Dropdown.Item  value="rating" onClick={handleFilter}>U</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
              <DropdownButton id={button3} title="Programs">
                <Dropdown.Item value="programs" onClick={handleFilter}>FHA</Dropdown.Item>
                <Dropdown.Item value="programs" onClick={handleFilter}>VA</Dropdown.Item>
            </DropdownButton>
        </Col>
        <Col>
            <DropdownButton value={limit} id="page-limit" title="Page Limit">
              <Dropdown.Item value="page_limit" onClick={handleFilter}>10</Dropdown.Item>
              <Dropdown.Item value="page_limit" onClick={handleFilter}>20</Dropdown.Item>
              <Dropdown.Item value="page_limit" onClick={handleFilter}>50</Dropdown.Item>
            </DropdownButton>
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
export default SearchLenders;