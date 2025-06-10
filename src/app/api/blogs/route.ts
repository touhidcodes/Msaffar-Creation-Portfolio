import prisma from "@/lib/prisma";
import { deepSanitize } from "@/lib/utils";
import { authenticateRequest } from "@/service/authMiddleware";
import { NextRequest, NextResponse } from "next/server";

// Create new blogs
export async function POST(req: NextRequest, res: NextResponse) {
  const user = await authenticateRequest(req);

  if (!user) {
    throw new Error("Unauthorized access!");
  }

  try {
    const body = await req.json();

    const newBlog = await prisma.blog.create({
      data: body,
    });
    // const sanitizedProject = deepSanitize(newProject);

    return NextResponse.json(
      { message: "Project created successfully", data: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog!", error);
    return NextResponse.json(
      { error: "Failed to create blog!" },
      { status: 500 }
    );
  }
}

// Get all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: [{ isFeatured: "desc" }, { updatedAt: "desc" }],
    });

    return NextResponse.json(
      {
        message: "Blogs fetched successfully!",
        data: blogs,
      },
      {
        status: 200,
        next: {
          tags: ["blogs"],
        },
      } as any
    );
  } catch (error) {
    console.error("Error fetching blogs!", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs!" },
      { status: 500 }
    );
  }
}
