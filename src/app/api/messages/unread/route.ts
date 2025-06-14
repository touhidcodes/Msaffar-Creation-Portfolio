import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//  Get all unread messages
export async function GET() {
  try {
    const unreadMessages = await prisma.message.findMany({
      where: { isRead: false },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        message: "Unread messages fetched successfully!",
        data: unreadMessages,
      },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Error fetching unread messages!", error);
    return NextResponse.json(
      { error: "Failed to fetch unread messages!" },
      { status: 500 }
    );
  }
}
