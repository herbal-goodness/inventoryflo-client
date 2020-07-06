import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../../images/footer-logo.png";
import { FOOTER_CONTENT } from "./constants";
const Footer = () => {
  return (
    <div className="container-fluid bg-mid-green">
      <footer className="container footer py-5">
        <div className="row">
          <div className="col-md-3 ml-5">
            <Link to="/">
              <img src={footerlogo} alt="logo" className="mb-2" />
            </Link>
            <p>
              Use of this site is subject to express terms of use. By using this
              site, you signify that you agree to be bound by these Terms of
              Service.
            </p>
          </div>

          {FOOTER_CONTENT.map(({ title, links, color }) => (
            <div className="col-md-2">
              <h2 className={`footer-header mb-3 ${color && "text-black-50"}`}>
                {title}
              </h2>

              <ul className="footer-nav">
                {links.map(({ text, to }) => (
                  <li>
                    <Link className={color ? color : ""} to={to}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
