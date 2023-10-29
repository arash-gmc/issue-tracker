import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="space-y-3">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default loading;
