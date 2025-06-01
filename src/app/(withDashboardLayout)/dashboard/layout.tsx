"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { cn } from "@/utils/cn";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div
        className={cn(
          "flex flex-col flex-1 transition-all duration-300", // no animation on margin
          // on lg: margin-left = 0 if sidebar closed, 16rem if open
          sidebarOpen ? "lg:ml-64" : "lg:ml-0 ml-0"
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            {/* Hamburger menu visible on all screen sizes */}
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="w-5 h-5" />
            </Button>
            <span className="font-semibold text-lg">Documents</span>
          </div>
          <a
            href="https://github.com"
            className="text-sm text-muted-foreground"
          >
            GitHub
          </a>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
