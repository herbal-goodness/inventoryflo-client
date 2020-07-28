import React, { useEffect, useState } from "react";
import SalesTable from "./ProductsTable";
import { makeData } from "../constants";
import InventorySidePane from "./InventorySidePane";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Button } from "react-bootstrap";

function SalesContainer() {
	const dispatch = useDispatch();
	const [exportData, setExport] = useState(null);
	const [foundResult, setFoundResult] = useState([]);

	const {
		isLoading,
		sales,
		hasShopifyUrl,
		hasShopifySecret,
		isSuccessful,
	} = useSelector(
		({ sales, userInfo }) => ({
			hasShopifyUrl:
				userInfo.user.shopifyDomain && userInfo.user.shopifyDomain.length > 3,
			hasShopifySecret:
				userInfo.user.shopifySecret && userInfo.user.shopifySecret.length > 3,
			isSuccessful: userInfo.successful,
			sales: sales.products,
			isLoading: sales.loading,
		}),
		shallowEqual
	);
	useEffect(() => {
		hasShopifyUrl &&
			hasShopifySecret &&
			isSuccessful &&
			sales === null &&
			dispatch({ type: "GET_PRODUCTS" });
	}, []);

	const exportFile = () => {
		exportData.save();
	};

	//TODO: WORK ON SEARCH
	const handleSearch = (e) => {
		e.preventDefault();
		const { value } = e.target;
		if (value?.length > 5) {
			const foundItems = sales.filter(({ title }) => {
				console.log(value, title);
				const queryLowCase = value.toLocaleLowerCase();
				const titleNameLow = title.toLocaleLowerCase();
				return titleNameLow.match(`${queryLowCase}`);
			});

			// foundItems.length > 0 && setFoundResult(foundItems);
		}
	};

	return (
		<div className="container-fluid mx-auto main">
			<div className="row">
				<div className="col-md-3">
					<h2 className="filter-inv-header">filter products</h2>
					<InventorySidePane handleSearch={handleSearch} />
				</div>
				<div className="col-md-9">
					<header className="d-flex justify-content-between mb-2 dashboard-header">
						<h2>
							<i className="fa fa-cube"></i> Products
						</h2>
						<div>
							<Button to="" className="btn btn-outline-primary mr-3">
								<i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
								Import from CSV
							</Button>

							<Button onClick={exportFile} className="btn btn-outline-primary">
								<i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
								Export
							</Button>
						</div>
					</header>

					<SalesTable
						setExport={setExport}
						isLoading={isLoading}
						sales={foundResult.length > 0 ? foundResult : sales}
					/>
				</div>
			</div>
		</div>
	);
}

export default SalesContainer;
