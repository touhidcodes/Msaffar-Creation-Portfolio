import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

// Get one project
export async function GET(req: Request, { params }: Params) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id },
    });

    if (!project)
      return NextResponse.json({ error: "Project not found" }, { status: 404 });

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// Update project
export async function PUT(req: Request, { params }: Params) {
  try {
    const body = await req.json();
    const updatedProject = await prisma.project.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// Delete project
export async function DELETE(req: Request, { params }: Params) {
  try {
    await prisma.project.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
