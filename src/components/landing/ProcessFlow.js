import React from "react";
import processFlow from "../../images/process_flow.png";
const ProcessFlow = () => {
	return (
		<section className="container-fluid process-flow-wrapper">
			<div className="process-flow container">
				<h1 className="process-flow-header">
					<span className="d-block text-right">Monitor the supplychain </span>
					<span className="d-block text-right sub-align-right">
						uninterrupted!
					</span>
				</h1>
				<div className="row">
					<div className="col-lg-6">
						<img className="img-fluid" src={processFlow} alt="process flow" />
					</div>
					<div className="col-lg-6 py-4">
						<div className="process-flow-content overflow-hidden pl-4">
							<p className="pb-2">Real time monitoring of the logistics</p>
							<p className="pb-2">Track purchase orders</p>
							<p className="pb-2">Quickly detect hiccups with a click</p>
							<p className="pb-2">Forecast and schedule orders for future</p>
							<p className="pb-2">
								Expedite and plan the operations effectively
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProcessFlow;
