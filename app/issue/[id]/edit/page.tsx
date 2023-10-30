import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

const EditIssuePage = ({ params: { id } }: { params: { id: string } }) => {
  if (!parseInt(id)) notFound();
  prisma.issue.findUnique({ where: { id: parseInt(id) } });
  return <IssueForm />;
};

export default EditIssuePage;
