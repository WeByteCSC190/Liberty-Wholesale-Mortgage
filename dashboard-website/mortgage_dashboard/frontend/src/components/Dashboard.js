import React from "react";
import Borrowers from "./Borrowers";
import Leads from "./Leads";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path='/leads' element={<Leads />} />
          <Route path='/borrowers' element={<Borrowers />} />
          <Route exact path='/' element={<p>This is the thing </p>}>
          </Route>
        </Routes>
      </Router>
    );
  }
}

