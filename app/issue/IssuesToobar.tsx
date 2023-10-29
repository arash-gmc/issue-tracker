import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesToobar = () => {
  return (
    <div>
      <Button className="m-auto">
        <Link href="/issue/new">Create Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesToobar;
