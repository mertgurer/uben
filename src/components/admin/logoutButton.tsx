"use client";

import React from "react";
import ButtonL from "../common/buttonL";

function LogoutButton() {
  async function handleLogout() {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <ButtonL
      className="bg-primary text-background px-5 py-1 rounded-3xl"
      onClick={() => handleLogout()}
    >
      Admin.Dashboard.logout
    </ButtonL>
  );
}

export default LogoutButton;
