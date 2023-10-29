import StatusBadge from "@/components/StatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue?.title}</Heading>
      <Flex className="space-x-3 my-3">
        <StatusBadge status={issue.status} />
        <Text size={"2"}>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{issue?.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
