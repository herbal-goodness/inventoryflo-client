import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../../images/footer-logo.png";
const Footer = () => {
	return (
		<div className="container-fluid bg-mid-green">
			<footer className="container footer py-5">
				<div className="row">
					<div className="col-md-3 ml-5">
						<img src={footerlogo} alt="logo" className="mb-2" />
						<p>
							Use of this site is subject to express terms of use. By using this
							site, you signify that you agree to be bound by these Terms of
							Service.
						</p>
					</div>
					<div className="col-md-2">
						<h2 className="footer-header mb-3">products</h2>

						<ul className="footer-nav">
							<li>
								<Link>Pricing</Link>
							</li>
							<li>
								<Link>Features</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h2 className="footer-header mb-3">integrations</h2>

						<ul className="footer-nav">
							<li>
								<Link>Shopify</Link>
							</li>
							<li>
								<Link>Amazon</Link>
							</li>
							<li>
								<Link>eFulfillment</Link>
							</li>
							<li>
								<Link>Google Drive</Link>
							</li>
							<li>
								<Link>Slack</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h2 className="footer-header mb-3">company</h2>

						<ul className="footer-nav">
							<li>
								<Link>About</Link>
							</li>
							<li>
								<Link>Customer Stories</Link>
							</li>
							<li>
								<Link>Product demo</Link>
							</li>
							<li>
								<Link>Contact Support</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-2">
						<h2 className="footer-header mb-3 text-black-50">
							terms of service
						</h2>

						<ul className="footer-nav">
							<li>
								<Link to="/" className="text-orange">
									Login
								</Link>
							</li>
							<li>
								<Link to="/signup-user" className="text-orange">
									Try Inventoryflo
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
