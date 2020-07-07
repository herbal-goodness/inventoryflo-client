import React, { useState } from "react";
import Password from "./Password";
import PersonalDetails from "./PersonalDetails";
import ShopifyDetails from "./UpdateShopify";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [details, setDetails] = useState({});

  const { email, IdToken, AccessToken } = useSelector(({ userInfo }) => ({
    IdToken: userInfo.user?.IdToken,
    AccessToken: userInfo.user?.AccessToken,
    email: userInfo.user?.email,
  }));

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };
  return (
    <div className="row justify-content-around mt-5 mb-2 pt-3">
      <PersonalDetails
        details={{ ...details, email }}
        handleChange={handleChange}
        tokens={{ IdToken, AccessToken }}
      />
      <Password
        details={details}
        handleChange={handleChange}
        tokens={{ IdToken, AccessToken }}
      />
      <ShopifyDetails
        details={details}
        handleChange={handleChange}
        tokens={{ IdToken, AccessToken }}
      />
    </div>
  );
};

export default UserProfile;
