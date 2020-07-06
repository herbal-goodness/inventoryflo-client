import React from "react";
import Password from "./Password";
import PersonalDetails from "./PersonalDetails";
import ShopifyDetails from "./UpdateShopify";

const UserProfile = () => {
  return (
    <div className="row justify-content-around mt-5 mb-2 pt-3">
      <PersonalDetails />
      <Password />
      <ShopifyDetails />
    </div>
  );
};

export default UserProfile;
