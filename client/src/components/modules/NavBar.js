import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as WhiteLogo} from "../../img/Samuel_Lam_Logo_for_black.svg";

import "../../index.css";
import "./NavBar.css";

function NavBar () {

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <nav className="navbar-container">
          <div className="navbar-title">
            <Link to="/" onClick={closeMobileMenu}> <WhiteLogo/> </Link> 
            <Link to="/" className="navbar-subtitle" onClick={closeMobileMenu}>Graduation 2022</Link>
          </div>

          <div className="navbar-menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item" onClick={closeMobileMenu}> 
              <Link to="/information" className="navbar-links" >Information</Link>
            </li>
            <li className="navbar-item" onClick={closeMobileMenu}> 
              <Link to="/mystory" className="navbar-links" >My Story</Link>
            </li>
            <li className="navbar-item"> 
              <a href="https://samuel-chlam.github.io/" className="navbar-links" onClick={closeMobileMenu}>
                Back to personal webpage</a>
            </li>
          </ul>
      </nav>
    </>
  );
}

export default NavBar;