import StatusBadge from "@/components/StatusBadge";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssuesToobar from "./IssuesToobar";

const LoadingPage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <>
      <IssuesToobar />
      <Table.Root
        variant="surface"
        mt="5"
        className="max-w-5xl"
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              id
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Date Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.Cell className="hidden md:table-cell">{issue}</Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default LoadingPage;
