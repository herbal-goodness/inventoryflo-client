import React from "react";

import SalesChart from "../charts/SalesChart";
import Orders from "./Orders";
import DashboardHeader from "./DashboardHeader";
import TodoSidePane from "./TodoSidePane";
import UserActivities from "./UserActivities";
import Channel from "./Channel";
import RecentActivity from "./RecentActivity";
import TotalListingsProductChart from "../charts/TotalListingsProductChart";
import TopProductChart from "../charts/TopProductChart";

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
					<TotalListingsProductChart />
					<TopProductChart />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
