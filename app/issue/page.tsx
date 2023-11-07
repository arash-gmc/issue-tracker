import { Link, StatusBadge } from "@/components";
import NextLink from "next/link";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssuesToobar from "./IssuesToobar";
import { Issue, Status } from "@prisma/client";

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue };
}

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

const IssuePage = async ({ searchParams }: Props) => {
  const filterObject = Object.keys(Status).includes(searchParams.status)
    ? { status: searchParams.status }
    : undefined;
  const orderBy = columns.map((col) => col.value).includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const issues = await prisma.issue.findMany({
    where: filterObject,
    orderBy,
  });

  return (
    <>
      <IssuesToobar />
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
                <NextLink href={"/issue?orderBy=" + column.value}>
                  {column.label}
                </NextLink>
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
    </>
  );
};

export const dynamic = "force-dynamic";

export default IssuePage;
