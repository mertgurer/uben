"use client";

import ButtonL from "@/components/common/buttonL";
import React from "react";

function Dashboard() {
  async function handleLogout() {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }
  return (
    <div className="flex flex-col w-screen min-h-screen items-center py-20 bg-primary-10">
      <ButtonL
        className="bg-primary text-background px-5 py-1 rounded-3xl"
        onClick={() => handleLogout()}
      >
        Admin.Dashboard.logout
      </ButtonL>
    </div>
  );
}

export default Dashboard;
