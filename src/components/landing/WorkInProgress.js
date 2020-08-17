import React from "react";
import wip from "../../images/wip.png";

const WorkInProgress = () => {
  return (
    <div className="container-fluid wip-header grad-wip">
      <div className="row">
        <div className="col-md-6 px-5">
          <img class="img-fluid mx-auto" src={wip} alt="WIP" />
        </div>
        <div className="col-md-6 wip-text">
          <h1 className="text-center wip-color">
            "We are still building this software. Coming soon..."
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
