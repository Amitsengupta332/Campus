"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="font-medium text-gray-700 hover:text-indigo-600"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/lost-found"
                  className="font-medium text-gray-700 hover:text-indigo-600"
                >
                  Lost & Found
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/hire-teacher"
                  className="font-medium text-gray-700 hover:text-indigo-600"
                >
                  Hire Teacher
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/buy-sell"
                  className="font-medium text-gray-700 hover:text-indigo-600"
                >
                  Buy & Sell
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/blogging"
                  className="font-medium text-gray-700 hover:text-indigo-600"
                >
                  Blogging
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button variant="outline" asChild>
            <Link href="/login" className="text-gray-700 hover:text-indigo-600">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
