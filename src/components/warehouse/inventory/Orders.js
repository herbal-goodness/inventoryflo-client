import React, { useEffect, useState } from "react";
import SalesTable from "./OrdersTable";
import InventorySidePane from "./InventorySidePane";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Button } from "react-bootstrap";
import OrdersSidePane from "./OrdersSidePane";

function OrdersContainer() {
	const dispatch = useDispatch();
	const [exportData, setExport] = useState(null);
	const [query, setQuery] = useState("");
	const [filterChannel, setFilter] = useState({});

	const {
		isLoading,
		orders,
		hasShopifyUrl,
		hasShopifySecret,
		isSuccessful,
	} = useSelector(
		({ orders, userInfo }) => ({
			hasShopifyUrl:
				userInfo.user.shopifyDomain && userInfo.user.shopifyDomain.length > 3,
			hasShopifySecret:
				userInfo.user.shopifySecret && userInfo.user.shopifySecret.length > 3,
			isSuccessful: userInfo.successful,
			orders: orders.userOrders,
			isLoading: orders.loading,
		}),
		shallowEqual
	);
	const handleSearch = (e) => {
		e.preventDefault();
		const { value } = e.target;
		setQuery(value);
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		setFilter({ ...filterChannel, [name]: value });
	};

	useEffect(() => {
		hasShopifyUrl &&
			hasShopifySecret &&
			isSuccessful &&
			(orders === null || orders.length < 40) &&
			dispatch({ type: "GET_ORDERS", payload: {} });
	}, []);

	const exportFile = () => {
		setFilter({});
		exportData.save();
	};

	const clearFilter = () => {
		dispatch({ type: "GET_ORDERS", payload: {} });
	};

	return (
		<div className="container-fluid mx-auto">
			<div className="row">
				<div className="col-md-3 inv-side-wrapper pt-5 inv-col-1">
					<h2 className="filter-inv-header">filter inventory</h2>
					<OrdersSidePane
						handleChange={handleChange}
						handleSearch={handleSearch}
						type="order"
						title="Orders"
					/>
				</div>
				<div className="col-md-9 inv-col-2">
					<header className="d-flex justify-content-between mb-2 dashboard-header flex-wrap">
						<div>
							<h2>
								<i class="fa fa-shopping-cart fa-fw" aria-hidden="true"></i>
								Orders
							</h2>
						</div>
						<div>
							<button
								to=""
								className="btn btn-info apply-filter mr-3 btn-block-sm">
								<i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
								Import from CSV
							</button>

							<button
								onClick={exportFile}
								className="btn btn-info apply-filter">
								<i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
								Export
							</button>
							{/* <span className="mr-2">
								<i className="fa fa-download fa-fw" aria-hidden="true"></i>
							</span>
							<span className="mr-4 text-muted font-slim elem-pointer">
								Import Data
							</span>
							<span>
								<i className="fa fa-upload fa-fw mr-2" aria-hidden="true"></i>
							</span>
							<span
								onClick={exportFile}
								className="text-muted font-slim elem-pointer">
								Export Data
							</span> */}
						</div>
					</header>

					<SalesTable
						setExport={setExport}
						isLoading={isLoading}
						orders={orders}
						query={query}
						clearFilter={clearFilter}
						filterChannel={filterChannel}
					/>
				</div>
			</div>
		</div>
	);
}

export default OrdersContainer;
