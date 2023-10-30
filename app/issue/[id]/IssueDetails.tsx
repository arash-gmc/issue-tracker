import { StatusBadge } from "@/components";
import { Issue } from "@prisma/client";
import { Box, Heading, Flex, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
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

export default IssueDetails;
