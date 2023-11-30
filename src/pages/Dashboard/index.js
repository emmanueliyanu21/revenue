import React from "react";
import Revenue from "./pages/revenue";
import Navbar from "./commons/navbar";
import SubMenu from "./commons/navbar/SubMenu";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <SubMenu />
      <Revenue />
    </div>
  );
}

export default Dashboard;
