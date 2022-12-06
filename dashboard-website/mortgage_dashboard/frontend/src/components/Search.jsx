import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Search=({page, callback1, callback2})=> {  
  const [innerValue, setInnerValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault()
    callback1(innerValue)
  }
  const handleFilter = e => {
    e.preventDefault()
    var clicked = document.querySelectorAll(".btn-filter")
    for (var i = 0; i < clicked.length; i++) 
        clicked[i].classList.remove('btn-filter')
    e.target.className += ' btn-filter'
    // console.log(filterValue)
    
    callback2(e.target.id)
  }
  if(page == "Leads" || page == "Borrowers"){
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
            Sort By:
        </Col>
        <Col>
          <DropdownButton title="Date">
              <Dropdown.Item id="Date ASC" onClick={handleFilter}>Asc</Dropdown.Item>
              <Dropdown.Item id="Date DESC" onClick={handleFilter}>Desc</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
            <DropdownButton title="First Name">
              <Dropdown.Item id="First Name ASC" onClick={handleFilter}>Asc</Dropdown.Item>
              <Dropdown.Item id="First Name Desc"  onClick={handleFilter}>Desc</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
              <DropdownButton title="Last Name">
                <Dropdown.Item id="Last Name ASC"  onClick={handleFilter}>Asc</Dropdown.Item>
                <Dropdown.Item id="Last Name DESC" onClick={handleFilter}>Desc</Dropdown.Item>
            </DropdownButton>
        </Col>
        <Col>
            <DropdownButton title="Status">
              <Dropdown.Item id="Status ASC" onClick={handleFilter}>Asc</Dropdown.Item>
              <Dropdown.Item id="Status DESC" onClick={handleFilter}>Desc</Dropdown.Item>
            </DropdownButton>
        </Col>
        <Col>
             <input value="Reset" type="button"
            onClick={handleFilter} id="reset" className="btn btn-light" />
        </Col>
    </Row>
    </Container>
      </div>
    )
  } else if(page == "Lenders"){
    return (
      <>    
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
            Sort By:
        </Col>
        <Col>
          <DropdownButton title="Company">
              <Dropdown.Item id="Company ASC" onClick={handleFilter}>A-Z</Dropdown.Item>
              <Dropdown.Item id="Company DESC" onClick={handleFilter}>Z-A</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
            <DropdownButton title="Rating">
              <Dropdown.Item  id="Rating A" onClick={handleFilter}>A</Dropdown.Item>
              <Dropdown.Item  id="Rating A-" onClick={handleFilter}>A-</Dropdown.Item>
              <Dropdown.Item  id="Rating B+" onClick={handleFilter}>B+</Dropdown.Item>
              <Dropdown.Item  id="Rating B" onClick={handleFilter}>B</Dropdown.Item>
              <Dropdown.Item  id="Rating C" onClick={handleFilter}>C</Dropdown.Item>
              <Dropdown.Item  id="Rating U" onClick={handleFilter}>U</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
              <DropdownButton title="Programs">
                <Dropdown.Item id="FHA" onClick={handleFilter}>FHA</Dropdown.Item>
                <Dropdown.Item id="VA" onClick={handleFilter}>VA</Dropdown.Item>
            </DropdownButton>
        </Col>
        
        <Col>
             <input value="Reset" type="button" id="reset"
            onClick={handleFilter} className="btn btn-light" />
        </Col>
    </Row>
    </Container>
      </div>

      </>
    );
  }
}

export default Search;

