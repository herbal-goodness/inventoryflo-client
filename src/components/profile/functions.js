import API from "../utils/urls";

export const handleSubmitShopify = async (
  details,
  setLoading,
  setError,
  setSucess,
  tokens
) => {
  try {
    setLoading(true);
    const res = await fetch(API.API_ROOT + "/add-shopify", {
      body: JSON.stringify(details),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.AccessToken}`,
      },
    });

    const data = await res.json();
    console.log(data);
    if (res.status > 300) {
      setError(data);
      setSucess(false);
      setLoading(false);
    } else {
      setSucess(true);
      setLoading(false);
      setError(null);
    }
  } catch (error) {
    setLoading(false);
    setError(error);
  }
};
