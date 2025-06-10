import prisma from "@/lib/prisma";
import { authenticateRequest } from "@/service/authMiddleware";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

// Get one blogs
export async function GET(req: Request, { params }: Params) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
    });

    if (!blog)
      return NextResponse.json({ error: "Blog not found!" }, { status: 404 });

    return NextResponse.json(
      {
        message: "Blogs retrieved successfully!",
        data: blog,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// Update blog
export async function PATCH(req: NextRequest, { params }: Params) {
  const user = await authenticateRequest(req);

  if (!user) {
    throw new Error("Unauthorized access!");
  }

  try {
    const body = await req.json();
    const updatedBlog = await prisma.blog.update({
      where: { id: params.id },
      data: body,
    });

    revalidateTag("blogs");

    return NextResponse.json(
      {
        message: "Blogs updated successfully!",
        data: updatedBlog,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update blog!" },
      { status: 500 }
    );
  }
}

// Delete blog
export async function DELETE(req: NextRequest, { params }: Params) {
  const user = await authenticateRequest(req);

  if (!user) {
    throw new Error("Unauthorized access!");
  }

  try {
    await prisma.blog.delete({
      where: { id: params.id },
    });

    revalidateTag("blogs");

    return NextResponse.json({ message: "Blog deleted successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete blog!" },
      { status: 500 }
    );
  }
}
