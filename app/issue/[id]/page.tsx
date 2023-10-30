import { StatusBadge } from "@/components";
import prisma from "@/prisma/client";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import IssueDetails from "./IssueDetails";
import IssueSideBar from "./IssueSideBar";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }}>
      <IssueDetails issue={issue} />
      <IssueSideBar issueId={issue.id} />
    </Grid>
  );
};

export default IssueDetailPage;
