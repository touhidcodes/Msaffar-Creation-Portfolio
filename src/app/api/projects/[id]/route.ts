import prisma from "@/lib/prisma";
import { authenticateRequest } from "@/service/authMiddleware";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Get one project
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project)
      return NextResponse.json(
        { error: "Project not found!" },
        { status: 404 }
      );

    return NextResponse.json(
      {
        message: "Projects retrieved successfully!",
        data: project,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// Update project
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await authenticateRequest(req);

  if (!user) {
    throw new Error("Unauthorized access!");
  }

  try {
    const body = await req.json();
    const updatedProject = await prisma.project.update({
      where: { id },
      data: body,
    });

    revalidateTag("projects");

    return NextResponse.json(
      {
        message: "Projects updated successfully!",
        data: updatedProject,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project!" },
      { status: 500 }
    );
  }
}

// Delete project
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = await authenticateRequest(req);

  if (!user) {
    throw new Error("Unauthorized access!");
  }

  try {
    await prisma.project.delete({
      where: { id },
    });

    revalidateTag("projects");

    return NextResponse.json({ message: "Project deleted successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project!" },
      { status: 500 }
    );
  }
}
