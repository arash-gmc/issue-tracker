import { Select } from "@radix-ui/themes";
import React from "react";

const SelectedUser = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assigned User" />
      <Select.Content>
        <Select.Item value="1">Figo</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectedUser;
