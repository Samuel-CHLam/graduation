import React, { Component } from "react";

import "../../index.css";
import "./Information.css";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div>
        <div className="u-block">
          <h1> Information about photo sessions</h1>
          <h2 className="u-margin-top">Date: 19th October, 2022 (Wednesday)</h2>
          <p> This is yet to be confirmed, but at a later stage you will be invited to create an account for displaying your personalised invites! 
            You may look at the draft timetable <a href="https://samuel-chlam.github.io/masterplan-2022/posts/graduation_arrangement/" target="_blank" rel="noreferrer">here</a>. Please 
            provide us feedback on the draft timetable.
          </p>
          <p>If you cannot make the designated slots, you are more than welcomed to join us in the following generic slots.</p>
          <ul>
            <li>Late afternoon: 16.00, outside of Royal Albert Hall facing the Albert Memorial at Kensington Garden.</li>
            <li>Evening: 20.00, at Dangoor Plaza, South Kensington Campus, Imperial College London.</li>
          </ul>
          <h2>General advice</h2>
          <ul>
            <li>Recommended dress code: formal / smart casual. </li>
            <li>Gifts (including flowers) are appreciated but optional - feel free to just come! Flowers and graduation dolls are provided.</li>
            <li>We are still confirming the timetable. I am relatively free in the morning, so if you can come in the morning, please let me know!</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Information;