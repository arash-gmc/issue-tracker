import React from "react";
import getStatusCounts from "./getStatusCounts";
import IssueChartsUI, { Data } from "./IssueChartsUI";

const IssueCharts = async () => {
  const { open, closed, inProgress } = await getStatusCounts();
  const data: Data[] = [
    { label: "Open", value: open },
    { label: "Closed", value: closed },
    { label: "In Progress", value: inProgress },
  ];
  return <IssueChartsUI data={data} />;
};

export default IssueCharts;
