import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "@/components/Link";
import prisma from "@/prisma/client";
import StatusBadge from "@/components/StatusBadge";
import delay from "delay";
import IssuesToobar from "./IssuesToobar";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(3000);
  return (
    <>
      <IssuesToobar />
      <Table.Root
        variant="surface"
        mt="5"
        className="max-w-5xl"
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              id
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Date Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell className="hidden md:table-cell">
                {issue.id}
              </Table.Cell>
              <Table.Cell>
                <Link href={`/issue/${issue.id}`}>{issue.title}</Link>
              </Table.Cell>
              <Table.Cell>
                <StatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuePage;
