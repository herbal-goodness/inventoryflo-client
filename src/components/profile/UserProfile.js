import React, { useState, useEffect } from "react";
import Password from "./Password";
import PersonalDetails from "./PersonalDetails";
import ShopifyDetails from "./UpdateShopify";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({ dispatch });

  const {
    email,
    shopifyUrl,
    firstName,
    lastName,
    phone,
    company,
    IdToken,
    AccessToken,
  } = useSelector(
    ({ userInfo }) => ({
      IdToken: userInfo.user?.IdToken,
      AccessToken: userInfo.user?.AccessToken,
      email: userInfo.user?.email,
      firstName: userInfo.user?.firstName,
      lastName: userInfo.user?.lastName,
      phone: userInfo.user?.phone,
      company: userInfo.user?.company,
      shopifyUrl: userInfo.user?.shopifyDomain,
    }),
    shallowEqual
  );

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };

  useEffect(() => {
    setDetails({
      ...details,
      shopifyUrl,
      email,
      firstName,
      lastName,
      phone,
      company,
    });
  }, []);

  return (
    <div className="row justify-content-around mt-5 mb-2 pt-3">
      <PersonalDetails
        details={{ ...details }}
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
