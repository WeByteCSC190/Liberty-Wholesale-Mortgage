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
      Items: [""],
      url: props.url
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
      Items: [],
    })
  }
  handleAPI = async (e) => {
    await axios
      .get(this.state.url)      //insert API call here later
      .then((res) => {
        this.setState({
          Items: res.data
        })
      })
      .catch((err) => {
        alert(err)
      })
    let convertToLc = e.target.value.toLowerCase()
   
    let filterData = this.state.Items.filter((e) => {
      let nameToLc = e.fname.toLowerCase()
       console.log(nameToLc.indexOf(convertToLc))
      return nameToLc.indexOf(convertToLc) !== -1
    })
    console.log(this.state.Items)
    this.setState({
      Items: filterData,
    })
  }
  render() {
    return (
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
            placeholder="Search ..."
            ref={this.node} />
            </div>
            <ul className="list-group">
                {this.state.Items.map((res) => {
                  console.log(res)
                return (
                <a href="/"
                    className="list-group-item list-group-item-action"
                    >{res.fname} {res.lname}
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
}
export default Search;