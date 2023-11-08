import { Link, StatusBadge } from "@/components";
import { Issue, Status } from "@prisma/client";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import NextLink from "next/link";
import React from "react";

export interface Queries {
  orderBy: keyof Issue;
  status: Status;
  page: string;
}

interface Props {
  issues: Issue[];
  queries: Queries;
}

const IssueTable = ({ issues, queries }: Props) => {
  return (
    <Table.Root
      variant="surface"
      mt="5"
    >
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.value}
              className={column.className}
            >
              <NextLink href={{ query: { ...queries, orderBy: column.value } }}>
                {column.label}
              </NextLink>
              {queries.orderBy === column.value && (
                <ArrowDownIcon className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
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
  );
};

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  {
    label: "Issue",
    value: "title",
  },
  { label: "Status", value: "status" },
  {
    label: "Date Created",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];

export const columnsName = columns.map((column) => column.value);

export default IssueTable;
