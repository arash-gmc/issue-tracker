import prisma from "@/prisma/client";
import IssueSummery from "./IssueSummery";

export default async function Home() {
  return <IssueSummery />;
}
