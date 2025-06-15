import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const resume = await prisma.resume.findFirst();
    return NextResponse.json(resume);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch resume" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { title, url, downloadUrl } = body;

    const existing = await prisma.resume.findFirst();

    let updatedResume;

    if (existing) {
      updatedResume = await prisma.resume.update({
        where: { id: existing.id },
        data: { title, url, downloadUrl },
      });
    } else {
      updatedResume = await prisma.resume.create({
        data: { title, url, downloadUrl },
      });
    }

    return NextResponse.json(updatedResume);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update resume" },
      { status: 500 }
    );
  }
}
