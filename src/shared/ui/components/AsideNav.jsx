import React from "react";
import { useNavigate } from "react-router";

const AsideNav = () => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center py-4">
        <h1>Practice Tracker</h1>
      </div>
      <div className="px-4 gap-2">
        <h3 className="py-2 cursor-pointer" onClick={() => navigate('/dashboard')} >Dashboard</h3>
        <h3 className="py-2 cursor-pointer" onClick={() => navigate('/question')} >Questions</h3>
        <h3 className="py-2 cursor-pointer" onClick={() => navigate('/progress')}>Progress</h3>
      </div>
    </div>
  );
};

export default AsideNav;
