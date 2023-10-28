"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  const onSubmit = async (data: IssueForm) => {
    const issue = await axios.post("/api/issue", data);
    router.push("/issue");
  };
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Title"
          {...register("title")}
        />
      </TextField.Root>
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

      <Button>Create Issue</Button>
    </form>
  );
};

export default NewIssuePage;
