"use client";
import Link from "next/link";
import React from "react";
import { BsBugFill } from "react-icons/bs";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Avatar, Container, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { Skeleton } from "@/components";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 p-x-5 border-b mb-5 px-5 h-14 items-center">
      <Container>
        <Flex
          justify="between"
          align="center"
        >
          <NavLinks />
          <AuthLiknk />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const links = [
    { label: "Dasboard", href: "/" },
    { label: "Issues", href: "/issue" },
  ];
  const path = usePathname();
  return (
    <Flex gap="3">
      <Link href="/">
        <BsBugFill />
      </Link>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={classNames({
            "!text-zinc-900": link.href === path,
            "nav-link": true,
          })}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
};

const AuthLiknk = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="5rem" />;
  if (status === "unauthenticated")
    return (
      <Link
        href="api/auth/signin"
        className="nav-link"
      >
        Sign in
      </Link>
    );
  if (status === "authenticated")
    return (
      <Flex>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session?.user?.image!}
              fallback="?"
              radius="full"
              size="3"
              className="cursor-pointer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="4">{session?.user?.name!}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Label>
              <Text size="2">{session?.user?.email!}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">LogOut</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    );
};

export default Navbar;
