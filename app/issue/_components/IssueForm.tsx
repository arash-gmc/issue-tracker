"use client";
import { modifyIssueSchema } from "@/app/validationSchema";
import { ErrorMessage, Spinner } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue, Status } from "@prisma/client";
import {
  Button,
  Callout,
  Flex,
  Select,
  SelectContent,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import SimpleMDE from "react-simplemde-editor";
import Link from "next/link";
import { ThickArrowLeftIcon } from "@radix-ui/react-icons";

type IssueFormData = z.infer<typeof modifyIssueSchema>;

interface Props {
  issue?: Issue;
}
const IssueForm = ({ issue }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(modifyIssueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = async (data: IssueFormData) => {
    try {
      setSubmitting(true);
      if (issue) await axios.patch(`/api/issue/${issue.id}`, data);
      else await axios.post("/api/issue", data);
      router.push("/issue");
      router.refresh();
    } catch (error) {
      setError("An Unexpected error occurred.");
      setSubmitting(false);
    }
  };
  return (
    <div>
      {error && (
        <Callout.Root
          className="mb-5"
          color="red"
        >
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div>
          <TextField.Root>
            <TextField.Input
              placeholder="Title"
              {...register("title")}
              defaultValue={issue?.title}
            />
          </TextField.Root>
          <ErrorMessage message={errors.title?.message} />
        </div>
        <div>
          <Controller
            name={"description"}
            control={control}
            defaultValue={issue?.description}
            render={({ field }) => (
              <SimpleMDE
                placeholder="description"
                {...field}
              />
            )}
          />
          <ErrorMessage message={errors.description?.message} />
        </div>
        {issue && (
          <Flex gap="2">
            <Text>Status: </Text>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select.Root
                  defaultValue={issue.status}
                  onValueChange={field.onChange}
                >
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="OPEN">Open</Select.Item>
                    <Select.Item value="CLOSED">Closed</Select.Item>
                    <Select.Item value="IN_PROGRESS">in Progress</Select.Item>
                  </Select.Content>
                </Select.Root>
              )}
            />
          </Flex>
        )}
        <Flex
          gap="2"
          mt="3"
        >
          <Button
            color="gray"
            size="3"
          >
            <ThickArrowLeftIcon />
            <Link href="/issue">Back</Link>
          </Button>
          <Button
            disabled={isSubmitting}
            size="3"
          >
            {issue ? "Update Issue" : "Create Issue"}{" "}
            {isSubmitting && <Spinner />}
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default IssueForm;
