import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../images/header-img.png";

const Header = () => {
	return (
		<div className="container-fluid header-wrapper">
			<header className="heading container">
				<h1 className="header">Sustainable Sourcing Made Easy</h1>
				<div className="row">
					<div className="col-lg-6 py-4">
						<div className="heading-content overflow-hidden">
							<h1 className="pb-3">One stop place for monitoring your:</h1>
							<p className="pb-2 ">
								<i
									className="fa fa-check-circle fa-fw text-success"
									aria-hidden="true"></i>
								Supplychain
							</p>
							<p className="pb-2 ">
								<i
									className="fa fa-check-circle fa-fw text-success"
									aria-hidden="true"></i>
								Inventory
							</p>
							<p className="pb-2 ">
								<i
									className="fa fa-check-circle fa-fw text-success"
									aria-hidden="true"></i>
								Sales
							</p>

							<Link
								className="btn btn-green font-weight-bold"
								to="/signup-user">
								Get Started
							</Link>
						</div>
					</div>
					<div className="col-lg-6 py-4 pl-5">
						<img className="img-fluid" src={headerImg} alt="sourcing" />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
