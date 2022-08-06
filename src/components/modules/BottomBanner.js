import React, { Component } from "react";
import { Link } from "react-router-dom";
import Institutes from "./Institutes.js";

import "../../index.css";
import "./BottomBanner.css";
import fbIcon from "../../img/icon/facebookicon.png";
import githubIcon from "../../img/icon/githubicon.png";
import linkedinIcon from "../../img/icon/linkedinicon.png";

class BottomBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="bottombanner-container">
        <div className="bottombanner-left">
          <Institutes />
          <div className="bottombanner-link">
            <div> <Link to="/privacy">Privacy</Link> | <a href="https://accessibility.mit.edu/">Accessibility</a></div>
            <div> <a href="https://github.com/Samuel-CHLam/newsite">About the website</a> </div>
          </div>
        </div>
        <div className="bottombanner-right"> 
          <div className="bottombanner-contactcontainer">
            <a className="bottombanner-contact" href="https://www.facebook.com/chunhei.lam.1671/"> <img src={fbIcon} alt="facebook-icon"/> </a>
            <a className="bottombanner-contact" href="https://github.com/Samuel-CHLam"> <img src={githubIcon} alt="github-icon"/> </a>
            <a className="bottombanner-contact" href="https://www.linkedin.com/in/ch-sammuel-6b446a190/"> <img src={linkedinIcon} alt="linkedin-icon"/> </a>
          </div>
          <div className="bottombanner-email">
            <b>Emails:</b>
            <ul className="u-nomargin">
              <li><a href="mailto:chun.lam18@imperial.edu">chun.lam18@imperial.ac.uk</a> (Academic)</li> 
              <li><a href="mailto:sammuelchlam@gmail.com">sammuelchlam@gmail.com</a> (Non-academic)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBanner;