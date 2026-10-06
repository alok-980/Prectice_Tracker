import React from "react";
import { Outlet } from "react-router";
import AsideNav from "../shared/ui/components/AsideNav";
import TopNav from "../shared/ui/components/TopNav";

const DashboardLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[1fr_5fr]">
      <div className="border-r">
        <AsideNav />
      </div>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="border-b px-4 py-4">
            <TopNav />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
