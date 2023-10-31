import { z } from "zod";

export const inputIssueSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(1).max(9999),
  status: z.enum(["OPEN", "CLOSED", "IN_PROGRESS"]).optional(),
});
