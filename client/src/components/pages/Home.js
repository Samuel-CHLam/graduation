import React, { Component } from "react";

import "../../index.css";
import "./Home.css";

import TopBanner from "../modules/TopBanner.js";
import HomeBackground from "../../img/Grad_demo_cut.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="App-container">
        <TopBanner 
          background={HomeBackground}
          opacity={0.5}
          title={(<> Celebrating Graduation <span className="home-banner-highlight">2022</span> </>)}
          content="Thank you for visiting the website for my graduation! The page contains all important announcements for my graduation, including details of ceremonies and photo arrangements."
          des="Graduation ceremony of the Faculty of Natural Sciences, 2021. Photo taken from Imperial College asset library."
        />
        <div className="u-block">
          <p> My graduation ceremony will take place on 19th October, 2022 (Wednesday), although there 
            will be various events happening during the week. Details for most of the events are not 
            confirmed yet, so stay tuned for updates!
          </p>
        </div>
        <div className="u-block">
          <h1> Graduation ceremony </h1>
          <p>Graduation ceremonies at Imperial for undergraduates take place on the commemoration day, which 
            is set to commemorate the visit by King George VI and Queen Elizabeth in 1945 to the Royal College of 
            Science (now faculty of natural sciences). The details of the ceremony are as followed:
          </p>
          <ul>
            <li>Date: 19th October, 2022 (Wednesday)</li>
            <li>Time: 17.30 - 19.30 (approx.), followed by a departmental reception. </li>
            <li>Venue: Royal Albert Hall</li>
          </ul>
          The tickets for the graduation ceremony and departmental reception are reserved for core family members, 
          but you can participate by watching the livestream <a href="https://www.imperial.ac.uk/graduation/" target="_blank" rel="noreferrer">
            here</a> or join us in one of the photo slots earlier on the day.
        </div>
        <div className="u-block">
          <h2 className="u-margin-top">Photo sessions during graduation ceremony</h2>
          <p> You may be invited to one of our photo sessions on the graduation day. Please log in for more details. Alternative, you may join us at 
            one of the following generic slots:
          </p>
          <ul>
            <li>Late afternoon: 16.00, outside of Royal Albert Hall facing the Albert Memorial at Kensington Garden.</li>
            <li>Evening: 20.00, at Dangoor Plaza, South Kensington Campus, Imperial College London.</li>
          </ul>
        </div>
        </div>
    );
  }
}

export default Home;