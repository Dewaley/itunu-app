import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav/Nav";

const AuthLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full md:w-[80%] p-4 bg-[#f5fafd] h-screen overflow-y-scroll">
        <Nav auth={true}/>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
