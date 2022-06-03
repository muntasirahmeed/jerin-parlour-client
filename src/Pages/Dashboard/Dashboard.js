import React from "react";
import Footer from "../../Shared/Footer";
import Navber from "../../Shared/Navber";
import DashboardSideBar from "./DashboardSideBar";

const Dashboard = () => {
  return (
    <div>
      <Navber />
      <DashboardSideBar>Hello</DashboardSideBar>
      <Footer />
    </div>
  );
};

export default Dashboard;
