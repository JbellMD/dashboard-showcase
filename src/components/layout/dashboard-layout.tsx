"use client";

import React, { useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
