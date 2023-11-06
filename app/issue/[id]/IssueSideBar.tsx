"use client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import SelectedUser from "./SelectedUser";
import { Issue } from "@prisma/client";

const IssueSideBar = ({ issue }: { issue: Issue }) => {
  return (
    <Flex
      direction="column"
      gap="2"
      className="mt-4"
    >
      <SelectedUser issue={issue} />
      <Link href={`/issue/${issue.id}/edit`}>
        <Button className="w-full">
          <Pencil2Icon />
          Edit Issue
        </Button>
      </Link>
      <DeleteButton issueId={issue.id} />
    </Flex>
  );
};

export default IssueSideBar;
