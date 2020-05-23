import axios from "axios";
const productsUrl =
	"https://td8ton72u4.execute-api.us-east-2.amazonaws.com/test/products";
const ordersUrl =
	"https://td8ton72u4.execute-api.us-east-2.amazonaws.com/test/orders";
const api = {
	async getProducts() {
		try {
			// Make call to API
			const result = await axios.get(productsUrl);
			const productsFound = result.data;
			return productsFound;
		} catch (error) {
			if (error) {
				console.log(error);
			}
		}
	},
};

export default api;
