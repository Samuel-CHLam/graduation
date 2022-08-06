import React, { Component } from "react";

import "../../index.css";
import "./OtherEvent.css";

class OtherEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
    <div className="u-block">
        <h1> Check out the other events happening during the week! </h1>
        <h2 className="u-margin-top"> Photo Day (To be confirmed) </h2>
        <p> We may organise an additional photo day on request. Please directly message me if you feel that this is appropriate.</p>
        <ul>
            <li>Date: 16th October, 2022 (Sunday)</li>
            <li>Time: To be confirmed. </li>
            <li>Venue: To be selected in one or more of the following:
                <ul>
                    <li>Imperial College, South Kensington Campus, London, SW72AZ</li>
                    <li>Worship and Ministry Center, Chinese Church in London, 69-71 Brook Green, Hammersmith, London, W67BE</li>
                    <li>Southbank Center</li>
                </ul>
            </li>
        </ul>
        <h2 className="u-margin-top"> Reception (To be confirmed) </h2>
        <p> We may host a dinner during the graduation week to thank everyone for your attendance and supports. Special invites will be 
            sent out in due course.
        </p>
        <ul>
            <li>Date: To be confirmed.</li>
            <li>Time: To be confirmed.</li>
            <li>Venue: To be confirmed.</li>
        </ul>
    </div>
    );
  }
}

export default OtherEvent;