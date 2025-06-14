// /app/api/stats/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [totalBlogs, totalProjects, totalMessages, unreadMessages] =
      await Promise.all([
        prisma.blog.count(),
        prisma.project.count(),
        prisma.message.count(),
        prisma.message.count({ where: { isRead: false } }),
      ]);

    return NextResponse.json(
      {
        message: "Stats fetched successfully!",
        data: {
          totalBlogs,
          totalProjects,
          totalMessages,
          totalUnreadMessages: unreadMessages,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
