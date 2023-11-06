import { NextRequest, NextResponse } from "next/server";
import { inputIssueSchema as schema } from "../../validationSchema";
import prisma from "@/prisma/client";
import { authCheck } from "../authCheck";

export async function GET(request: NextRequest) {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues);
}

export async function POST(request: NextRequest) {
  if (!(await authCheck())) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue);
}
