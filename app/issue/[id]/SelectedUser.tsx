import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SelectedUser = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/user").then((res) => res.data),
  });
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assigned User" />
      <Select.Content>
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
