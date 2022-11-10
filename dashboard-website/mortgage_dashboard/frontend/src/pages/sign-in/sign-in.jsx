import React, {useState } from "react";
import logo from '../../logo.jpg'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navigate, Link} from "react-router-dom";
import {login} from '../../actions/auth';
import CSRFToken from "../../components/CSRFToken";
import {connect} from 'react-redux';
import axios from 'axios';

axios.defaults.withCredentials = true;

const SignIn = ({login, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''  
  });

  const {username, password} = formData;
  const onChange = e => setFormData({...formData,  [e.target.name]: e.target.value });
  
  const onSubmit = e => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated)
    return <Navigate to='/dashboard' />;


  // render() {
  return (
    <div className="SignIn">
      <div style={{  display: "flex",
        justifyContent: "center",
        alignItems: "center" }}>
        <form onSubmit={e => onSubmit(e)}>
          <CSRFToken/>
            <img src={logo} alt="logo" />
            <p>Sign In with a MLO Support Account</p>
          <div className="center">
            <input type="text" placeholder="Username" name="username" onChange={e =>onChange(e)} value={username} required />
          </div>
          <div className="center">
            <input type="password" placeholder="Password" name="password" onChange={e =>onChange(e)} value={password} minLength='6' required  />
          </div>
          <button className="btn btn-primary" type='submit'>Sign In</button>
          <Row>
              <a href="sign-up">Forgot Username or Password</a>
          </Row>
        </form>
      </div>
      <Row style={{ position: "relative",  margin: '50px 0 0 0' }}>
        <Col style={{ padding: '0 2%' }}>
          <Link to="/terms" style={{ float: 'left' }} className="info">
          Terms of Use
          </Link>
          <Link to="/privacy" style={{ float: 'left' }} className="info">
          Privacy Policy
          </Link>
        </Col>
        <Col style={{ padding: '0 2%' }} >
          <Link to="/Help" className="info" style={{ float: 'right' }}>
            Help
          </Link>
        </Col >
      </Row>
    </div>
  );
  // }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(SignIn);