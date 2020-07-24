import React from "react";

const Channel = () => {
  return (
    <>
      <form className="p-2 my-5">
        <div className="form-group">
          <label htmlFor="select" className="channel-header">
            Channels
          </label>
          <select className="form-control">
            <option>Shopify US</option>
            <option>FBA-Amazon Canada</option>
          </select>
        </div>
        <div className="channel-header mt-4">Time Period</div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="submit"
              value="1 day"
              className="btn btn-outline-info mt-4"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              value="7 days"
              className="btn btn-outline-primary mt-4"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              value="30 days"
              className="btn btn-outline-primary mt-4"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Channel;
