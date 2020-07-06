import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/inventoryflo-logo-2.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top mb-4" id="main-menu">
        <Link className="navbar-brand ml-5" to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        <div className="container">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center align-items-center"
            id="collapsibleNavId"
          >
            <ul className="nav mr-auto text-muted">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/integrations">
                  Integrations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Pricing
                </Link>
              </li>
            </ul>
            <ul className="d-flex justify-content-between align-items-center">
              <li className="nav-item">
                <Link to="/signin-user" className="nav-link nav-link-border">
                  Login
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-green ml-3 align-self-center"
                  to="/signup-user"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
