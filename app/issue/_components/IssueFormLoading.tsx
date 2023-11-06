import { Skeleton } from "@/components";
import { Box } from "@radix-ui/themes";
import React from "react";

const IssueFormLoading = () => {
  return (
    <Box className="space-y-2">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormLoading;
