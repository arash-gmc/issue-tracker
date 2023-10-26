"use client";
import Link from "next/link";
import React from "react";
import { BsBugFill } from "react-icons/bs";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [
    { label: "Dasboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const path = usePathname();

  return (
    <nav className="flex space-x-6 p-x-5 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsBugFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-900": link.href === path,
                "text-zinc-500": link.href !== path,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
