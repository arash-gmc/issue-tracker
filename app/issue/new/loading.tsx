import React from "react";
import { Skeleton } from "@/components";

const loading = () => {
  return (
    <div className="space-y-3">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default loading;
