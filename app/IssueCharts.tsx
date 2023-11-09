import React from "react";
import { getStatusCounts } from "./getStatusCounts";
import IssueChartsUI, { Data } from "./IssueChartsUI";

const IssueCharts = async () => {
  const { open, closed, inProgress } = await getStatusCounts();
  const data: Data[] = [
    { label: "Open", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
  ];
  return <IssueChartsUI data={data} />;
};

export default IssueCharts;
