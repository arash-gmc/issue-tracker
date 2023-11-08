"use client";
import { Box } from "@radix-ui/themes";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export interface Data {
  label: string;
  value: number;
}

interface Props {
  data: Data[];
}

const IssueChartsUI = ({ data }: Props) => {
  return (
    <Box>
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-8)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default IssueChartsUI;
