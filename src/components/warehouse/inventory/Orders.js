import React, { useEffect, useState } from "react";
import SalesTable from "./OrdersTable";
import { makeData } from "../constants";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Button } from "react-bootstrap";
import OrdersSidePane from "./OrdersSidePane";

function OrdersContainer() {
	const dispatch = useDispatch();
	const [exportData, setExport] = useState(null);

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
	useEffect(() => {
		hasShopifyUrl &&
			hasShopifySecret &&
			isSuccessful &&
			(orders === null || orders === undefined) &&
			dispatch({ type: "GET_ORDERS", payload: {} });
	}, []);
	const exportFile = () => {
		exportData.save();
	};

	return (
		<div className="container-fluid mx-auto">
			<div className="row">
				<div className="col-md-3 inv-side-wrapper pt-5 inv-col-1">
					<h2 className="filter-inv-header">filter orders</h2>
					<OrdersSidePane products={makeData(100)} title="Orders" />
				</div>
				<div className="col-md-9 inv-col-2">
					<header className="d-flex justify-content-between mb-2 dashboard-header">
						<div>
							<h2>
								<i class="fa fa-shopping-cart fa-fw" aria-hidden="true"></i>
								Orders
							</h2>
						</div>
						<div>
							<span className="mr-2">
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
							</span>
						</div>
					</header>
					<SalesTable
						setExport={setExport}
						isLoading={isLoading}
						orders={orders}
					/>
				</div>
			</div>
		</div>
	);
}

export default OrdersContainer;
