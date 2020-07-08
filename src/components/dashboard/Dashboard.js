import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SalesChart from "../charts/SalesChart";
import Orders from "./Orders";
import DashboardHeader from "./DashboardHeader";
import TodoSidePane from "./TodoSidePane";
import UserActivities from "./UserActivities";
import Channel from "./Channel";
import RecentActivity from "./RecentActivity";

const Dashboard = () => {
	return (
		<div className="container-fluid mx-auto main dashboard">
			<DashboardHeader />

			<div className="row">
				<div className="col-md-3">
					<TodoSidePane />
					<Channel />
					<RecentActivity />
				</div>

				<div className="col-md-9">
					<UserActivities />
					<SalesChart />
					<Orders />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
