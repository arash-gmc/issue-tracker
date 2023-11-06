import { modifyIssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { authCheck } from "../../authCheck";

export async function PATCH(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  if (!(await authCheck())) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = modifyIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  if (!parseInt(id))
    return NextResponse.json(
      { error: "issue id is not valid" },
      { status: 400 }
    );
  if (body.assignedUserId) {
    const user = await prisma.user.findUnique({
      where: { id: body.assignedUserId },
    });
    if (!user)
      return NextResponse.json(
        { error: "user with this id not found" },
        { status: 400 }
      );
  }

  const issue = await prisma.issue.update({
    where: { id: parseInt(id) },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
      assignedUserId: body.assignedUserId,
    },
  });
  return NextResponse.json(issue);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  if (!(await authCheck())) return NextResponse.json({}, { status: 401 });
  if (!parseInt(id))
    return NextResponse.json({ error: "id is not valid" }, { status: 400 });
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue)
    return NextResponse.json({ error: "issue not found" }, { status: 404 });
  await prisma.issue.delete({ where: { id: parseInt(id) } });
  return NextResponse.json({});
}
