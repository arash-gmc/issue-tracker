"use client";
import React, { PropsWithChildren } from "react";
import { QueryClient as QC, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QC();
const QueryClient = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClient;
