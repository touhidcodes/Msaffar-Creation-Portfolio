import prisma from "@/lib/prisma";
import { deepSanitize } from "@/lib/utils";
import { authenticateRequest } from "@/service/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

// Create new project
export async function POST(req: NextRequest, res: NextResponse) {
  const user = await authenticateRequest(req);
  console.log(user);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const body = await req.json();
    console.log(body);

    const newProject = await prisma.project.create({
      data: body,
    });
    console.log(newProject);
    // Serialize the _id and Date fields to plain JSON-safe values
    const sanitizedProject = deepSanitize(newProject);
    // const sanitizedProject = {
    //   ...newProject,
    //   id: newProject.id.toString(),
    //   createdAt: newProject.createdAt.toISOString(),
    //   updatedAt: newProject.updatedAt.toISOString(),
    // };
    console.log(sanitizedProject);

    // return new Response(JSON.parse(JSON.stringify(sanitizedProject)), {
    //   status: 201,
    //   headers: { "Content-Type": "application/json" },
    // });
    return NextResponse.json(
      { message: "Project created successfully", data: sanitizedProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

// Get all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
