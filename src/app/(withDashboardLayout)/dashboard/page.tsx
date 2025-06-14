"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, FolderGit2, Mail, MailWarning } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState<{
    totalBlogs: number;
    totalProjects: number;
    totalMessages: number;
    totalUnreadMessages: number;
  } | null>(null);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/stats");
      const data = await res.json();

      if (res.ok) {
        setStats(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard stats", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const cards = [
    {
      icon: <BookText className="w-5 h-5 text-blue-600" />,
      label: "Total Blogs",
      value: stats?.totalBlogs ?? "...",
      description: "Published blog articles",
    },
    {
      icon: <FolderGit2 className="w-5 h-5 text-green-600" />,
      label: "Total Projects",
      value: stats?.totalProjects ?? "...",
      description: "Live and completed projects",
    },
    {
      icon: <Mail className="w-5 h-5 text-purple-600" />,
      label: "Total Messages",
      value: stats?.totalMessages ?? "...",
      description: "All contact messages",
    },
    {
      icon: <MailWarning className="w-5 h-5 text-red-600" />,
      label: "Unread Messages",
      value: stats?.totalUnreadMessages ?? "...",
      description: "Messages awaiting review",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((stat, idx) => (
        <Card key={idx}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
