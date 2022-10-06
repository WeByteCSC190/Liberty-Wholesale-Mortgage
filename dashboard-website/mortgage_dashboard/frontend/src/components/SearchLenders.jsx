import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
class Search extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      Leads: [],
    }
    this.node = React.createRef()
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.onSearchClick)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onSearchClick)
  }
  onSearchClick = (e) => {
    if (this.node.current.contains(e.target)) {
      return
    }
    this.setState({
      Leads: [],
    })
  }
  handleAPI = async (e) => {
    await axios
      .get('')      //insert API call here later
      .then((res) => {
        this.setState({
          Leads: res.data,
        })
      })
      .catch((err) => {
        alert(err)
      })
    let convertToLc = e.target.value.toLowerCase()
    let filterData = this.state.Leads.filter((e) => {
      let nameToLc = e.name.toLowerCase()
      return nameToLc.indexOf(convertToLc) !== -1
    })
    this.setState({
      Leads: filterData,
    })
  }
  render() {
    return (
      <div style={{ paddingLeft: 90, paddingRight:90 }}>
      <div className="container mt-5 search-container">
        <Container className="mt-4">
        <Row>
            <Col sm={10}>
            <div>
            <input
            type="text"
            onClick={this.onSearchClick}
            className="form-control"
            onChange={this.handleAPI}
            placeholder="Search lenders"
            ref={this.node} />
            </div>
            <ul className="list-group">
            {this.state.Leads.map((res) => {
                return (
                <a href="/"
                    className="list-group-item list-group-item-action"
                    >{res.name}
                </a>
                )
            })}
            </ul>
        </Col>
        
        <Col sm={2}>
            <button className="btn btn-primary"><FontAwesomeIcon icon={Icons.faMagnifyingGlass}  /></button>
        </Col>
        </Row>
    </Container>
    <Container className="mt-4 mb-4">
    <Row  xs="auto" >
        <Col className="filter-style">
            FILTER: 
        </Col>
        <Col>
            <button className="btn btn-primary">PROGRAMS</button>
        </Col>
        <Col>
            <button className="btn btn-primary">RATING</button>
        </Col>
        <Col>
            <button className="btn btn-primary">STATE</button>
        </Col>
       
        <Col>
            <button className="reset-button">Reset</button>
        </Col>
    </Row>
    </Container>
      </div>
      </div>
    )
  }
}
export default Search;