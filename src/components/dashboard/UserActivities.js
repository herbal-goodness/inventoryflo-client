import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Spinner } from "../utils/components";

const UserActivities = ({ data }) => {
	const dispatch = useDispatch();
	const {
		isLoading,
		salesToDatePrice,
		ordersToMonthDate,
		cancelledOrders,
		ordersToBeFulfilled,
		isSuccessful,
	} = useSelector(
		({ orders }) => ({
			isSuccessful: orders.successful,
			salesToDatePrice: orders.userOrders?.salesToDatePrice,
			ordersToMonthDate: orders.userOrders?.ordersToMonthDate,
			cancelledOrders: orders.userOrders?.cancelledOrders,
			ordersToBeFulfilled: orders.userOrders?.ordersToBeFulfilled,
			isLoading: orders.loading,
		}),
		shallowEqual
	);

	//   useEffect(() => {
	//     setTimeout(() => {
	//       if (isLoading && !isSuccessful && ordersToMonthDate === undefined) {
	//         dispatch({ type: "ORDERS_ERROR" });
	//       }
	//       clearTimeout();
	//     }, 10000);
	//   }, [isLoading]);

	return isLoading ? (
		<Spinner />
	) : (
		<div className="user-activities-wrapper mx-md-auto">
			<h3 className="p-4"> Month to date performance</h3>
			<div className="d-flex flex-row flex-wrap justify-content-between align-items-center user-activities mb-4 py-3">
				<div className="col-md-2 px-3 flex-fill  flex-md-shrink-1">
					<div className="content">
						$ {(isSuccessful && salesToDatePrice) || "0"}
					</div>
					<p className="py-auto text-center">Sales Month to date</p>
				</div>
				<div className="col-md-2 px-3 flex-fill  flex-md-shrink-1">
					<div className="content">
						{(isSuccessful && ordersToMonthDate) || "0"}
					</div>
					<p className="py-auto text-center">Orders month to date</p>
				</div>
				<div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
					<div className="content">
						{(isSuccessful && ordersToBeFulfilled) || "0"}
					</div>
					<p className="py-auto text-center">Quantity sold</p>
				</div>
				<div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
					<div className="content">
						{(isSuccessful && cancelledOrders) || "0"}
					</div>
					<p className="py-auto text-center">Cancelled orders</p>
				</div>
				<div className="col-md-2 px-3 flex-fill flex-md-shrink-1">
					<div className="content">
						{(isSuccessful && ordersToBeFulfilled) || "0"}
					</div>
					<p className="py-auto text-center">Orders to be fulfilled</p>
				</div>
			</div>
		</div>
	);
};

export default UserActivities;
