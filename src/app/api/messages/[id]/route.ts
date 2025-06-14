import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { error: "Message ID is required!" },
      { status: 400 }
    );
  }

  try {
    const updatedMessage = await prisma.message.update({
      where: { id },
      data: { isRead: true },
    });

    return NextResponse.json(
      { message: "Message marked as read!", data: updatedMessage },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Error marking message as read:", error);
    return NextResponse.json(
      { error: "Failed to mark message as read!" },
      { status: 500 }
    );
  }
}
