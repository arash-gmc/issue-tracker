import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "purple" }
> = {
  OPEN: { label: "Open", color: "red" },
  CLOSED: { label: "Closed", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "purple" },
};

const StatusBadge = ({ status }: Props) => {
  const selectedStatus = statusMap[status];
  return <Badge color={selectedStatus.color}>{selectedStatus.label}</Badge>;
};

export default StatusBadge;
