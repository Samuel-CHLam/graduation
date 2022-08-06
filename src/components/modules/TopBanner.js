import React, { Component } from "react";

import "../../index.css";
import "./TopBanner.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param background
 * @param opacity
 * @param title
 * @param content
 * @param des describing the background image
 */

class TopBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <div className="topbanner" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,${1-this.props.opacity || 0}), 
            rgba(0,0,0,${1-this.props.opacity || 0})), url("${this.props.background}")`}}>
            <div className="topbanner-bodycontainer">
                <h1 className="topbanner-title"> {this.props.title} </h1>
                <p className="topbanner-content"> {this.props.content} </p>
                <p className="topbanner-des"> &#9654; {this.props.des} </p>
            </div>
        </div>
        <div className="topbanner-mobile-des">
          &#9650; {this.props.des} 
        </div>
        <div className="u-block topbanner-mobile">
          <h1 className="topbanner-title"> {this.props.title} </h1>
          <p className="topbanner-content"> {this.props.content} </p>
        </div>
      </>
    );
  }
}

export default TopBanner;