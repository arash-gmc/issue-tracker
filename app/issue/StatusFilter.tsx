import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const statuses: { label: string; value: Status | "0" }[] = [
  { label: "All Status", value: "0" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "in Progress", value: "IN_PROGRESS" },
];

const StatusFilter = () => {
  const queries = useSearchParams();
  const router = useRouter();
  return (
    <Select.Root
      defaultValue={queries.get("status") || undefined}
      onValueChange={(selected) => {
        const params = new URLSearchParams();
        if (queries.get("orderBy"))
          params.append("orderBy", queries.get("orderBy")!);
        if (selected && selected !== "0") params.append("status", selected);
        const query = "?" + params.toString();
        router.push("/issue" + query);
      }}
    >
      <Select.Trigger placeholder="Filter By Status" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            key={status.value}
            value={status.value}
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default StatusFilter;
