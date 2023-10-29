import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  children: ReactNode;
  href: string;
}

const Link = ({ children, href }: Props) => {
  return (
    <RadixLink>
      <NextLink href={href}>{children}</NextLink>
    </RadixLink>
  );
};

export default Link;
