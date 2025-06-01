"use client";

import {
  CircleUser,
  FileText,
  LayoutDashboard,
  LibraryBig,
  LineChart,
  Mail,
  MoreHorizontal,
  NotebookPen,
  PlusCircle,
  Settings,
  UsersRound,
  FileStack,
  FolderArchive,
  Bell,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

const sidebarLinks = [
  {
    section: "Main",
    items: [
      { label: "Quick Create", icon: PlusCircle, href: "#", active: true },
      { label: "Dashboard", icon: LayoutDashboard, href: "#" },
      { label: "Lifecycle", icon: LibraryBig, href: "#" },
      { label: "Analytics", icon: LineChart, href: "#" },
      { label: "Projects", icon: FileStack, href: "#" },
      { label: "Team", icon: UsersRound, href: "#" },
    ],
  },
  {
    section: "Documents",
    items: [
      { label: "Data Library", icon: FolderArchive, href: "#" },
      { label: "Reports", icon: FileText, href: "#" },
      { label: "Word Assistant", icon: NotebookPen, href: "#" },
      { label: "More", icon: MoreHorizontal, href: "#" },
    ],
  },
  {
    section: "Settings",
    items: [{ label: "Settings", icon: Settings, href: "#" }],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 flex justify-between items-center border-b shadow-sm">
        <div className="font-bold text-lg">M Saffar Creation</div>
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white border-r h-screen md:w-64 flex-col justify-between fixed z-50 transition-all duration-300 md:flex",
          open ? "flex w-64" : "hidden",
          "md:static"
        )}
      >
        {/* Top: Logo & Notification */}
        <div className="flex items-center justify-between px-6 py-4 border-b md:border-none">
          <div className="text-lg font-semibold">M Saffar Creation</div>
          <Bell className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Middle: Scrollable navigation */}
        <div className="flex-1 overflow-y-auto custom-scroll px-1">
          {sidebarLinks.map((group, idx) => (
            <div key={idx} className="mb-4">
              {group.section !== "Main" && (
                <div className="px-6 py-1 text-xs text-muted-foreground uppercase">
                  {group.section}
                </div>
              )}
              <nav className="flex flex-col">
                {group.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-6 py-2 text-sm font-medium hover:bg-muted transition",
                      item.active && "bg-muted"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom: Static Profile */}
        <div className="px-6 py-4 border-t flex items-center gap-3 shrink-0 bg-white">
          <img
            src="https://github.com/shadcn.png"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <div className="font-medium">shadcn</div>
            <div className="text-muted-foreground text-xs">m@example.com</div>
          </div>
          <MoreHorizontal className="ml-auto w-4 h-4" />
        </div>
      </aside>
    </>
  );
}
