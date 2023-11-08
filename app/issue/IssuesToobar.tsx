"use client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import StatusFilter from "./StatusFilter";

const IssuesToobar = () => {
  return (
    <Flex justify="between">
      <StatusFilter />
      <Button>
        <Link href="/issue/new">Create Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssuesToobar;
