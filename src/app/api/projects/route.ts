import prisma from "@/lib/prisma";
import { deepSanitize } from "@/lib/utils";
import { authenticateRequest } from "@/service/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

// Create new project
export async function POST(req: NextRequest, res: NextResponse) {
  const user = await authenticateRequest(req);

  if (!user) {
    throw new Error("Unauthorized access!");
  }
  try {
    const body = await req.json();

    const newProject = await prisma.project.create({
      data: body,
    });
    const sanitizedProject = deepSanitize(newProject);

    //   status: 201,
    //   headers: { "Content-Type": "application/json" },
    // });
    return NextResponse.json(
      { message: "Project created successfully!", data: sanitizedProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project!", error);
    return NextResponse.json(
      { error: "Failed to create project!" },
      { status: 500 }
    );
  }
}

// Get all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ isFeatured: "desc" }, { updatedAt: "desc" }],
    });

    return NextResponse.json(
      {
        message: "Projects fetched successfully!",
        data: projects,
      },
      {
        status: 200,
        next: {
          tags: ["projects"],
        },
      } as any
    );
  } catch (error) {
    console.error("Error fetching projects!", error);
    return NextResponse.json(
      { error: "Failed to fetch projects!" },
      { status: 500 }
    );
  }
}
