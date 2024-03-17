import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function AppLayout() {
  return (
    <div className="bg-primary vh-100 p-4">
      <div className="bg-secondary rounded-5 h-100">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
