"use client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import SelectedUser from "./SelectedUser";

const IssueSideBar = ({ issueId }: { issueId: number }) => {
  return (
    <Flex
      direction="column"
      gap="2"
      className="mt-4"
    >
      <SelectedUser />
      <Link href={`/issue/${issueId}/edit`}>
        <Button className="w-full">
          <Pencil2Icon />
          Edit Issue
        </Button>
      </Link>
      <DeleteButton issueId={issueId} />
    </Flex>
  );
};

export default IssueSideBar;
