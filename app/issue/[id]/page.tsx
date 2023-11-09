import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueSideBar from "./IssueSideBar";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/nextConfigObject";
import { cache } from "react";

interface Props {
  params: { id: string };
}

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (!parseInt(id)) notFound();
  const issue = await fetchIssue(parseInt(id));
  if (!issue) notFound();

  const session = await getServerSession(authOptions);

  return (
    <Grid
      columns={{ initial: "1", md: "5" }}
      gap="3"
    >
      <Box className="col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>{session && <IssueSideBar issue={issue} />}</Box>
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchIssue(parseInt(params.id));
  return {
    title: "Issue Tracker - " + issue?.title,
    description: "details for issue: " + issue?.id,
  };
}

export default IssueDetailPage;
