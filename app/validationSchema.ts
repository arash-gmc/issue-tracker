import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(1).max(65535),
});

export const modifyIssueSchema = z.object({
  title: z.string().min(1, "title is required").max(255).optional(),
  description: z.string().min(1).max(65535).optional(),
  status: z.enum(["OPEN", "CLOSED", "IN_PROGRESS"]).optional(),
  assignedUserId: z.string().min(1).max(255).optional().nullable(),
});
