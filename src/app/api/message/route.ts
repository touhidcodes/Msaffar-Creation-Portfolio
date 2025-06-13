import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//  Create a new message
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newMessage = await prisma.message.create({
      data: data,
    });

    return NextResponse.json(
      { message: "Message sent successfully!", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Error creating message!", error);
    return NextResponse.json(
      { error: "Failed to send message!" },
      { status: 500 }
    );
  }
}

//  Get all messages (most recent first)
export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      { message: "Messages fetched successfully!", data: messages },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Error fetching messages!", error);
    return NextResponse.json(
      { error: "Failed to fetch messages!" },
      { status: 500 }
    );
  }
}
