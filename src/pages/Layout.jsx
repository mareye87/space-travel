import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Layout = () => {
  return (
    <main className="relative">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
