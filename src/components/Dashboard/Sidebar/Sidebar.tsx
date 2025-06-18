"use client";

import { cn } from "@/lib/utils";
import { Mail, MoreHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sidebarLinks } from "./SidebarLinks";
import { usePathname } from "next/navigation";
import { fetchWithAuth } from "@/service/fetchWithAuth";
import Image from "next/image";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type TUser = {
  email: string;
  username: string;
};
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<TUser | null>(null);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const fetchUnreadCount = async () => {
    try {
      const res = await fetchWithAuth("/api/messages/unread", {
        method: "GET",
      });

      const data = await res.json();
      console.log(data);

      if (res.ok && Array.isArray(data.data)) {
        setUnreadCount(data.data.length);
      }
    } catch (err) {
      console.error("Error fetching unread message count:", err);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await fetchWithAuth("/api/auth/user", {
        method: "GET",
      });

      const data = await res.json();

      if (res.ok && data.user) {
        setUser(data.user);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  useEffect(() => {
    fetchUnreadCount();
    fetchUser();
  }, []);

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
          isOpen ? "fixed inset-y-0 left-0 w-64 z-50 flex flex-col" : "hidden"
        )}
      >
        {/* Top header */}
        <div className="flex items-center justify-between px-6 py-4 border-b flex-shrink-0">
          <Link href="/" className="text-lg font-semibold">
            M Saffar Creation
          </Link>
          <div className="relative flex items-center gap-3">
            <Link href="/dashboard/messages">
              <Mail className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">
                  {unreadCount}
                </span>
              )}
            </Link>
          </div>
          <button
            className="block lg:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
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
                      pathname === item.href &&
                        "bg-secondary text-secondary-foreground"
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
          <Image
            src="https://github.com/shadcn.png"
            alt="user"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <div className="font-medium">
              {user ? user?.username : "shadcn"}
            </div>
            <div className="text-muted-foreground text-xs">
              {" "}
              {user ? user?.email : "m@example.com"}
            </div>
          </div>
          <MoreHorizontal className="ml-auto w-4 h-4" />
        </div>
      </aside>
    </>
  );
}
