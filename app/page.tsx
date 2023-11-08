import prisma from "@/prisma/client";
import IssueSummery from "./IssueSummery";
import IssueCharts from "./IssueCharts";
import { Flex, Grid } from "@radix-ui/themes";
import LastIssues from "./LastIssues";

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
