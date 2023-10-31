import { inputIssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = inputIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  if (!parseInt(id))
    return NextResponse.json({ error: "id is not valid" }, { status: 400 });
  const issue = await prisma.issue.update({
    where: { id: parseInt(id) },
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(issue);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  if (!parseInt(id))
    return NextResponse.json({ error: "id is not valid" }, { status: 400 });
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue)
    return NextResponse.json({ error: "issue not found" }, { status: 404 });
  await prisma.issue.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({});
}
