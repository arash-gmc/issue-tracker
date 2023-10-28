import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string(),
  description: z.string(),
});
