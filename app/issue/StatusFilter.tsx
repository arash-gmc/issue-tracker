import { Select } from "@radix-ui/themes";
import React from "react";

const StatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter By Status" />
      <Select.Content>
        <Select.Item value="mine">My Status</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default StatusFilter;
