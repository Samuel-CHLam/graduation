import React, { Component } from "react";

import "../../index.css";
import "./Institutes.css";

class Institutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="institutes-container">
        <a href="https://www.imperial.ac.uk/" className="institutes-imperial"> </a>
        {/* <a href="https://web.mit.edu/" className="institutes-mit"> </a> */}
      </div>
    );
  }
}

export default Institutes;