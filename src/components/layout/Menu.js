import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/inventoryflo-logo-2.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top mb-4" id="main-menu">
        <Link
          className="navbar-brand pl-lg-5 pl-md-5 nav-logo-center"
          to="/dashboard"
        >
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
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
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto text-muted">
            <li className="nav-item px-lg-4 px-md-4">
              <Link className="nav-link" to="">
                Features
              </Link>
            </li>
            <li className="nav-item px-lg-4 px-md-4">
              <Link className="nav-link" to="/integrations">
                Integrations
              </Link>
            </li>
            <li className="nav-item px-lg-4 px-md-4">
              <Link className="nav-link" to="">
                Pricing
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item  px-lg-4 px-md-4">
              <Link to="/signin-user" className="nav-link mr-2">
                Login
              </Link>
            </li>
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
      </nav>
    </>
  );
};

export default Navbar;
