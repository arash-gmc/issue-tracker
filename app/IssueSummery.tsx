import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { getStatusCounts } from "./getStatusCounts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummery = async () => {
  const { open, closed, inProgress } = await getStatusCounts();
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open", value: open, status: "OPEN" },
    { label: "Closed", value: closed, status: "CLOSED" },
    { label: "In Progress", value: inProgress, status: "IN_PROGRESS" },
  ];
  return (
    <Flex
      gap="4"
      justify="center"
    >
      {containers.map((container) => (
        <Link
          href={"issue?status=" + container.status}
          key={container.value}
        >
          <Flex
            className="border-2 rounded-lg p-4"
            direction="column"
            align="center"
            gap="2"
          >
            <Text
              size="2"
              className="font-medium"
            >
              {container.label}
            </Text>
            <Text
              className="font-bold"
              size="4"
            >
              {container.value}
            </Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

export default IssueSummery;
