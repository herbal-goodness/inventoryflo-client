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
    console.log(tokens);
    const res = await fetch(API.API_ROOT + "/add-shopify", {
      body: JSON.stringify(details),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.IdToken}`,
      },
    });

    const data = await res.json();
    console.log(data);
    if (res.status > 300) {
      setError(data);
      setLoading(false);
    }

    setSucess(true);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    setError(error);
  }
};
