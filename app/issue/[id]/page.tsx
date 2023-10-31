import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueSideBar from "./IssueSideBar";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();

  return (
    <Grid
      columns={{ initial: "1", md: "5" }}
      gap="3"
    >
      <Box className="col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <IssueSideBar issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
