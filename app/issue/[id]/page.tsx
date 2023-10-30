import { StatusBadge } from "@/components";
import prisma from "@/prisma/client";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }}>
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
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issue/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
