import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import InventoryAnalysis from "../charts/InventoryAnalysis";
import DashboardHeader from "./DashboardHeader";
import RecentActivity from "./RecentActivity";
import GetStartedSidePane from "./GetStartedSidePane";

import SalesByChannel from "../charts/SalesByChannel";
import SalesByProducts from "../charts/SalesByProducts";
import SalesDriversParams from "./SalesDriversParams";
import SalesAndOrders from "./SalesAndOrders";
import DashboardSubHeaders from "./DashboardSubHeaders";
import SlowMovingProd from "./SlowMovingProd";
import TopCustByOrders from "./TopCustByOrders";
import SalesShareChart from "../charts/SalesShareChart";
import LargestOrders from "./LargestOrders";
import { AlertDismissible } from "../utils/components";

const Dashboard = () => {
	const dispatch = useDispatch();
	const [alertUser, setAlert] = useState(false);

	const {
		dashboard,
		orders,
		sales,
		hasShopifyUrl,
		hasShopifySecret,
		isSuccessful,
		name,
		successfulSalesAndOrders,
	} = useSelector(
		({ sales, userInfo, orders, dashboard, salesAndOrders }) => ({
			dashboard,
			loadingSalesAndOrders: salesAndOrders.loading,
			successfulSalesAndOrders: salesAndOrders.successful,
			hasShopifyUrl:
				userInfo.user.shopifyDomain && userInfo.user.shopifyDomain.length > 3,
			hasShopifySecret:
				userInfo.user.shopifySecret && userInfo.user.shopifySecret.length > 3,
			name: userInfo.user.firstName,
			isSuccessful: userInfo.successful,
			sales: sales.products,
			orders: orders.userOrders,
			productsLoaded: sales.successful,
		}),
		shallowEqual
	);

	useEffect(() => {
		hasShopifyUrl &&
			hasShopifySecret &&
			isSuccessful &&
			sales.length < 1 &&
			dispatch({ type: "GET_PRODUCTS", payload: {} });

		hasShopifyUrl &&
			hasShopifySecret &&
			isSuccessful &&
			orders.length < 1 &&
			dispatch({
				type: "GET_ORDERS",
				payload: {},
			});
	}, []);

	useEffect(() => {
		if (!localStorage.getItem("exists")) {
			setAlert(true);
			localStorage.setItem("exists", true);
		} else {
			setTimeout(() => {
				successfulSalesAndOrders
					? setAlert(false)
					: dispatch({ type: "GET_SALES_AND_ORDER" });
			}, 10000);
		}
	}, [alertUser]);

	useEffect(() => {
		hasShopifyUrl &&
			hasShopifySecret &&
			isSuccessful &&
			dashboard.data === null &&
			dispatch({ type: "GET_DASHBOARD_DATA" });
	}, []);

	return (
		<div className="container-fluid mx-auto dashboard">
			{alertUser ? (
				<AlertDismissible
					header={`Hey, ${name}`}
					message="We are building your dashboard data for the first time, please allow the system, This will happen only once. Refresh after about 40 secs"
					variant="info"
				/>
			) : (
				""
			)}

			<DashboardHeader />
			<div className="row">
				<div className="col-sm-12 col-md-9">
					<SalesAndOrders />

					{/* Sales Drivers */}
					<SalesDrivers orders={orders} />
					<div className="row">
						<div className="row">
							<div className="col-md-12">
								<InventoryAnalysis data={dashboard.data} />
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-12 col-md-3 mb-5">
					<GetStartedSidePane />
					<RecentActivity />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

const SalesDrivers = ({ orders }) => {
	const [info, setDuration] = useState({ duration: [], type: "" });
	const [
		{ topProducts, ordersWithCustName, othersTotal },
		setTopProducts,
	] = useState({
		topProducts: [],
		ordersWithCustName: [],
		othersTotal: 0,
	});
	const [isEmpty, setEmpty] = useState(false);

	const {
		salesDrivers,
		loadingSalesAndOrders,
		successfulSalesAndOrders,
		errorSalesAndOrders,
	} = useSelector(
		({ salesAndOrders }) => ({
			salesDrivers: salesAndOrders.salesAndOrders,
			loadingSalesAndOrders: salesAndOrders.loading,
			errorSalesAndOrders: salesAndOrders.error,
			successfulSalesAndOrders: salesAndOrders.successful,
		}),
		shallowEqual
	);

	const isNegative = (value) => {
		const ex = new RegExp("^-");
		return ex.test(value);
	};

	useEffect(() => {
		if (!loadingSalesAndOrders && successfulSalesAndOrders) {
			setDuration({
				duration: salesDrivers.filterBy30Days,
				type: "last30days",
			});
		}
	}, [salesDrivers]);

	const handleChange = (e, type) => {
		if (type === "S&D")
			switch (e.target.value) {
				case "thisWeek":
					setDuration({
						duration: salesDrivers.filterBythisWeek,
					});
					break;
				case "thisMonth":
					setDuration({
						duration: salesDrivers.filterByMonthDate,
					});
					break;
				case "today":
					setDuration({
						duration: salesDrivers.filterByToDay,
					});

					break;
				case "yesterday":
					setDuration({
						duration: salesDrivers.filterByYesterday,
					});

					break;
				case "last7days":
					setDuration({
						duration: salesDrivers.filterByLast7Days,
					});

					break;
				case "last30days":
					setDuration({
						duration: salesDrivers.filterBy30Days,
					});
					break;

				default:
					setDuration({
						duration: salesDrivers.filterBy30Days,
					});
					break;
			}
	};
	const handleChannelChange = (event) => {
		const { value } = event.target;
		if (value !== "shopify") {
			value !== "all" ? setEmpty(true) : setEmpty(false);
		} else {
			setEmpty(false);
		}
	};
	return (
		<div className="chart-container py-2 px-3 mb-4 mx-2">
			<div className="row">
				<DashboardSubHeaders
					type={"S&D"}
					title="Sales Drivers"
					handleChange={handleChange}
					handleChannelChange={handleChannelChange}
				/>
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="d-flex flex-wrap justify-content-between mb-2 justify-items-center">
						<div>
							{/* Add data to sales by channel once we pull more API from other sources */}
							<SalesByChannel isEmpty={isEmpty} data={info.duration} />
						</div>

						<div>
							<SalesByProducts
								isEmpty={isEmpty}
								data={info.duration}
								allSales={orders}
								setTopProducts={setTopProducts}
							/>
						</div>
						<div>
							<SlowMovingProd
								isEmpty={isEmpty}
								data={info.duration}
								allSales={orders}
							/>
						</div>
					</div>
					<div className="d-flex flex-wrap justify-content-between mb-2 justify-items-center">
						<div>
							<TopCustByOrders isEmpty={isEmpty} topProducts={topProducts} />
							<SalesDriversParams
								isEmpty={isEmpty}
								data={ordersWithCustName}
								title="Unique customers"
								fig="30"
							/>
						</div>
						<div>
							<SalesShareChart
								isEmpty={isEmpty}
								topProducts={topProducts}
								othersTotal={othersTotal}
							/>
						</div>
						<div>
							<LargestOrders isEmpty={isEmpty} data={info.duration} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
