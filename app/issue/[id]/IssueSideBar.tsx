"use client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const IssueSideBar = ({ issueId }: { issueId: number }) => {
  return (
    <Flex
      direction="column"
      gap="2"
      className="mt-4"
    >
      <Button>
        <Pencil2Icon />
        <Link href={`/issue/${issueId}/edit`}>Edit Issue</Link>
      </Button>
      <DeleteButton issueId={issueId} />
    </Flex>
  );
};

export default IssueSideBar;
