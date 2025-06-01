import { ReactNode } from "react";
import "@/app/globals.css";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 bg-muted overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
