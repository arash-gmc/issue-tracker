import prisma from "@/prisma/client";
import IssueSummery from "./IssueSummery";
import IssueCharts from "./IssueCharts";
import { Flex, Grid } from "@radix-ui/themes";
import LastIssues from "./LastIssues";
import { Metadata } from "next";

export default async function Home() {
  return (
    <Grid
      columns={{ initial: "1", sm: "2" }}
      gap="3"
    >
      <Flex
        direction="column"
        gap="3"
      >
        <IssueSummery />
        <IssueCharts />
      </Flex>
      <LastIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Home",
};

export const dynamic = "force-dynamic";
