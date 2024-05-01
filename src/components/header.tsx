"use client";

import Link from "next/link";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./theme-toggle";

const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="text-[var(--prim)] font-bold text-2xl">NetShop</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={true}>
          <Link color="foreground" href="#">
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Offers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/sign-in" className="font-medium text-[var(--prim)]">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            href="/auth/sign-up"
            as={Link}
            variant="flat"
            className="bg-[var(--prim)] text-white font-medium">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
