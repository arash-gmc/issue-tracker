import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormLoading from "../../_components/IssueFormLoading";
const IssueForm = dynamic(() => import("@/app/issue/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormLoading />,
});

const EditIssuePage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
