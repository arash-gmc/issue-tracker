import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import prisma from "@/prisma/client";

const SelectedUser = ({ issue }: { issue: Issue }) => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/user").then((res) => res.data),
  });
  return (
    <Select.Root
      defaultValue={issue.assignedUserId || "0"}
      onValueChange={async (userId) => {
        await axios.patch("/api/issue/" + issue.id, {
          assignedUserId: userId !== "0" ? userId : null,
        });
      }}
    >
      <Select.Trigger placeholder="Assigned user" />
      <Select.Content>
        <Select.Item value="0">Unassigned</Select.Item>
        {users?.map((user) => (
          <Select.Item
            value={user.id}
            key={user.id}
          >
            {user.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SelectedUser;
