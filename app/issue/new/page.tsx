"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingIcon from "@/components/LoadingIcon";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const onSubmit = async (data: IssueForm) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issue", data);
      router.push("/issue");
    } catch (error) {
      setError("An Unexpected error occurred.");
      setSubmitting(false);
    }
  };
  return (
    <div className="max-w-xl">
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
            />
          </TextField.Root>
          <ErrorMessage message={errors.title?.message} />
        </div>
        <div>
          <Controller
            name={"description"}
            control={control}
            render={({ field }) => (
              <SimpleMDE
                placeholder="description"
                {...field}
              />
            )}
          />
          <ErrorMessage message={errors.description?.message} />
        </div>
        <Button disabled={isSubmitting}>
          Create Issue {isSubmitting && <LoadingIcon />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;