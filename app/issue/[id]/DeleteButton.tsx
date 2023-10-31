import { Spinner } from "@/components";
import { Dialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteButton = ({ issueId }: { issueId: Number }) => {
  const router = useRouter();
  const [isError, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  return (
    <>
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
    </>
  );
};

export default DeleteButton;
