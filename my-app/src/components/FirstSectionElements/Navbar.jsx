import React from "react";
import Dropdown from "../Dropdown";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-between">
        <div id="logo-edit" className="col-2">
          <a href="www.google.com">
            <div className="logo-container position-relative d-flex justify-content-center flex-column">
              <h3>Travel</h3>
              <img src="./assets/Arrow 05.png" alt="" id="arrow" />
            </div>
          </a>
        </div>
        <div className="navigation col-3 col-xl-6">
          <div className="hamburger-btn navbar-toggler">
            <button
              className="btn d-block d-xl-none navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#editing"
              aria-controls="editing"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
          </div>
          <div className="d-xl-block navbar-collapse" id="editing">
            <ul className="navbar-nav d-xl-flex justify-content-xl-evenly flex-xl-row text-center maging">
              <li className="nav-item nav-pad navigatorz hovering">
                <Link className="nav-link active" aria-current="page" to="/dashboard" >Dashboard</Link>
              </li>
              <li className="nav-item nav-pad navigatorz hovering">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item nav-pad navigatorz hovering">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item nav-pad navigatorz hovering">
                <Dropdown
                  ServiceOne="First Service"
                  ServiceTwo="Second Service"
                  ServiceThree="Third Service"
                />
              </li>
              <li className="nav-item navigatorz nav-pad hovering">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Upcoming Packages
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2 d-none d-xl-block">
          <button type="button" className="btn btn-success">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
