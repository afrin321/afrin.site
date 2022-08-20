import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Home/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
