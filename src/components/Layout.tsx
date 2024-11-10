import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#17212b] text-white">
      <div className="max-w-2xl mx-auto px-4">
        <main className="pt-6">
          <Outlet />
        </main>
        <Navigation />
      </div>
    </div>
  );
}

export default Layout;
