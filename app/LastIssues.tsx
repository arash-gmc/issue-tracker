import { StatusBadge } from "@/components";
import prisma from "@/prisma/client";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const LastIssues = async () => {
  const issues = await prisma.issue.findMany({
    include: { assignedUser: true },
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return (
    <Flex
      direction="column"
      gap="4"
    >
      {issues.map((issue) => (
        <Flex
          key={issue.id}
          justify="between"
          className="border-b-2 "
        >
          <Flex
            direction="column"
            align="start"
            className="mb-2"
          >
            <Link href={"issue/" + issue.id}>{issue.title}</Link>
            <StatusBadge status={issue.status} />
          </Flex>
          {issue.assignedUserId && (
            <Avatar
              src={issue.assignedUser?.image!}
              fallback="?"
              radius="full"
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default LastIssues;
