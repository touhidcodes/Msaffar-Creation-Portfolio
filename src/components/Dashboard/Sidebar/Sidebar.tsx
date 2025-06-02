"use client";

import { cn } from "@/lib/utils";
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
  X,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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
    section: "Documents",
    items: [
      { label: "Data Library", icon: FolderArchive, href: "#" },
      { label: "Reports", icon: FileText, href: "#" },
      { label: "Word Assistant", icon: NotebookPen, href: "#" },
      { label: "More", icon: MoreHorizontal, href: "#" },
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

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Overlay shown only on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        ref={sidebarRef}
        className={cn(
          "w-64 z-50 bg-white h-full shadow-md transition-transform duration-300 transform flex flex-col",
          // isOpen ? "translate-x-0" : "-translate-x-full"
          isOpen ? "fixed inset-y-0 left-0 w-64 z-50 flex flex-col" : "hidden"
        )}
      >
        {/* Top header */}
        <div className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0">
          <div className="text-lg font-semibold">M Saffar Creation</div>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <button
              className="block lg:hidden"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Nav */}
        <div className="flex-1 overflow-y-auto">
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

        {/* Footer */}
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
