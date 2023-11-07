import { Link, StatusBadge } from "@/components";
import prisma from "@/prisma/client";
import { Table, Text } from "@radix-ui/themes";
import IssuesToobar from "./IssuesToobar";
import { Status } from "@prisma/client";

interface Props {
  searchParams?: { status?: Status };
}

const IssuePage = async ({ searchParams }: Props) => {
  const filterObject =
    searchParams?.status && Object.keys(Status).includes(searchParams.status)
      ? { status: searchParams.status }
      : {};

  const issues = await prisma.issue.findMany({
    where: filterObject,
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

export const dynamic = "force-dynamic";

export default IssuePage;
