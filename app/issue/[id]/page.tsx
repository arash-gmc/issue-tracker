import { StatusBadge } from "@/components";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();

  return (
    <Box className="px-3 max-w-2xl">
      <Heading>{issue?.title}</Heading>
      <Flex className="space-x-3 my-3">
        <StatusBadge status={issue.status} />
        <Text size={"2"}>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Box className="border-2 p-4 rounded-xl">
        <ReactMarkdown className="prose">{issue?.description}</ReactMarkdown>
      </Box>
    </Box>
  );
};

export default IssueDetailPage;
