import React from "react";

const Channel = () => {
	return (
		<>
			<form className="p-2 my-5">
				<div className="form-group">
					<h3 className="channel mt-4">Channel</h3>
					<input
						type="text"
						className="form-control"
						value="Shopify US"
						className="btn btn-outline-success mt-4 btn-block"
						role="button"
					/>
				</div>
				<div className="form-group">
					<h3 className="channel mt-4">Time Period</h3>
					<input
						type="text"
						className="form-control"
						value="Last 7 days"
						className="btn btn-outline-success mt-4 btn-block"
						role="button"
					/>
				</div>
			</form>
		</>
	);
};

export default Channel;
