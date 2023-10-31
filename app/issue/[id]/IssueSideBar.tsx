"use client";
import { Spinner } from "@/components";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Dialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const IssueSideBar = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [isError, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
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
      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            color="red"
            disabled={isDeleting}
          >
            Delete Issue {isDeleting && <Spinner />}
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Issue Deletion</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to delete this issue?
          </Dialog.Description>
          <Flex
            gap="3"
            mt="3"
            justify="end"
          >
            <Dialog.Close>
              <Button
                color="red"
                onClick={async () => {
                  try {
                    setDeleting(true);
                    await axios.delete("/api/issue/" + issueId);
                    router.push("/issue");
                    router.refresh();
                  } catch (error) {
                    setDeleting(false);
                    setError(true);
                  }
                }}
              >
                Delete
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button color="gray">Cancel</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
      <Dialog.Root open={isError}>
        <Dialog.Content>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Description>
            An unexpected error happened during issue deletion.
          </Dialog.Description>
          <Flex justify="end">
            <Button
              color="gray"
              onClick={() => setError(false)}
            >
              OK
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default IssueSideBar;
