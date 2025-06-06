import prisma from "@/lib/prisma";
import { authenticateRequest } from "@/service/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

// Create new project
export async function POST(req: NextRequest) {
  const auth = await authenticateRequest(req);
  console.log(auth);

  if (!auth) {
    return NextResponse.json(
      { message: "Unauthorized access" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const newProject = await prisma.project.create({
      data: body,
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
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
