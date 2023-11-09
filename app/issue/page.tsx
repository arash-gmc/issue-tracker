import Pagination from "@/components/Pagination";
import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import IssueTable, { Queries, columnsName } from "./IssueTable";
import IssuesToobar from "./IssuesToobar";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

interface Props {
  searchParams: Queries;
}

const IssuePage = async ({ searchParams }: Props) => {
  const where = Object.keys(Status).includes(searchParams.status)
    ? { status: searchParams.status }
    : undefined;
  const orderBy = columnsName.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const issuesCount = await prisma.issue.count({ where });
  const paginationSize = 6;
  const currentPage = parseInt(searchParams.page) || 1;
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: paginationSize * (currentPage - 1),
    take: paginationSize,
  });

  return (
    <Flex
      direction="column"
      gap="3"
    >
      <IssuesToobar />
      <IssueTable
        issues={issues}
        queries={searchParams}
      />
      <Pagination
        pageSize={paginationSize}
        itemCount={issuesCount}
        currentPage={currentPage}
      />
    </Flex>
  );
};

export const metadata: Metadata = {
  title: "issue tracker - List of issues",
};

export const dynamic = "force-dynamic";

export default IssuePage;
