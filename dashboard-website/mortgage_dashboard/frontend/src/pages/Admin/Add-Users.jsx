import React, { useState } from "react";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";
import api from "../../services/api";

api.defaults.withCredentials = true;

const AddUsers = () => {
  const [accountCreated, setAccountCreated] = useState(false);

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    fName: "",
    lName: "",
    email: "",
    nmlsID: "",
    role: "",
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  // const onChange = (e) =>
  // setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   if (re_password === password) {
  //     register(username, password, re_password);
  //     setAccountCreated(true);
  //   }
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("username", formValue.username);
    formData.append("password", formValue.password);
    formData.append("fName", formValue.fName);
    formData.append("lName", formValue.lName);
    formData.append("email", formValue.email);
    formData.append("nmlsID", formValue.nmlsID);
    formData.append("role", formValue.role);

    console.log(formValue);
    const createUserUrl = `${process.env.REACT_APP_API_URL}/accounts/users/register`;
    api({
      method: "Post",
      url: createUserUrl,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formValue,
    })
      .then((response) => {
        const data = response.data;
        // setAccountInfo(data);
        console.log(data);
        window.location.href = "/Users";
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="Header">
          <Navbar />
        </div>
        <div className="Content">
          <Container className="page-format">
            <div className="container mt-5">
              <h1>Add a User </h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label className="form-label">Username: </label>
                  <input
                    className="form-control"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    autoComplete="username"
                    type="text"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-3">Password: </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-3">Email:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="John@gmail.com"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-3">First Name: </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="John"
                    name="fName"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-3">Last Name: </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Doe"
                    name="lName"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label mt-3">NMLS ID:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="00000"
                    name="nmlsID"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mt-3">Role</label>
                  <select
                    className="form-control"
                    type="text"
                    placeholder="Select"
                    name="role"
                    onChange={handleChange}
                    required
                  >
                    <option selected disabled>
                      Choose Role
                    </option>
                    <option>Loan Officer</option>
                    <option>Loan Proccessor</option>
                    <option>Admin</option>
                  </select>
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                  Add
                </button>
              </form>
            </div>
          </Container>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { register })(AddUsers);

export default AddUsers;
