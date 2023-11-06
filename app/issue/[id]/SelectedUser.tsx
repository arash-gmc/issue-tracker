import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { Skeleton } from "@/components";

const SelectedUser = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/user").then((res) => res.data),
    retry: 3,
    staleTime: 60 * 60 * 1000,
  });
  const changeAssignedUser = (userId: string) => {
    axios
      .patch("/api/issue/" + issue.id, {
        assignedUserId: userId !== "0" ? userId : null,
      })
      .catch(() => {
        toast.error("changes could not be saved");
      });
  };
  if (isLoading) return <Skeleton />;
  if (isError) return null;
  return (
    <>
      <Select.Root
        defaultValue={issue.assignedUserId || "0"}
        onValueChange={(userId) => changeAssignedUser(userId)}
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
      <Toaster />
    </>
  );
};

export default SelectedUser;
