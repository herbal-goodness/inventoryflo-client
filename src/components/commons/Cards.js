import React from "react";

const Cards = ({ source, alternate, title, header, children }) => {
	return (
		<div>
			<div className="card mb-4 mx-sm-auto">
				<img
					className="card-img-top img-fluid"
					src={source}
					alt={alternate}
					title={title}
				/>
				<div className="card-body">
					<h2 className="card-title text-capitalize py-0">{header}</h2>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Cards;
