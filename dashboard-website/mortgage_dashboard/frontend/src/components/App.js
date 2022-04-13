import React, { Component } from "react";
import { render } from "react-dom";
import SignIn from "./sign-in/sign-in.component.js";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="container">
            <SignIn />
    </div>
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);