import React from "react";
import wip from "../../images/wip.png";

const WorkInProgress = () => {
  return (
    <div className="container-fluid wip-header grad-wip">
      <div className="row">
        <div className="col-md-6 px-5">
          <img class="img-fluid mx-auto" src={wip} alt="WIP" />
        </div>
        <div className="col-md-6 wip-text text-center pt-5">
          <div class="row h-100">
            <div class="col-sm-12 my-auto">
              <div class=" card-block w-100">
                "We are still building this
                <br /> software. Coming soon..."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
