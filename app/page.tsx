import prisma from "@/prisma/client";
import IssueSummery from "./IssueSummery";
import IssueCharts from "./IssueCharts";

export default async function Home() {
  return <IssueCharts />;
}
