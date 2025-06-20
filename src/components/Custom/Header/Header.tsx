"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Button from "@/components/ui/Button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationOptions: { title: string; href: string }[] = [
  { title: "Services", href: "#services" },
  { title: "Projects", href: "/projects" },
  { title: "Blogs", href: "/blogs" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-screen-xl mx-auto flex justify-between items-center px-3 md:px-0">
      {/* Logo (Hidden on Mobile) */}
      <div className="hidden md:block">
        <Link href="/">
          <Image
            src="/assets/logo/black.png"
            alt="Logo"
            width={180}
            height={50}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {navigationOptions.map((nav) => (
              <NavigationMenuItem key={nav.title}>
                <Link
                  href={nav.href}
                  passHref
                  className="text-xl font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100"
                >
                  <NavigationMenuLink
                    asChild
                    className="text-xl font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100"
                  >
                    {nav.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Menu and Logo */}
      <div className="md:hidden flex justify-between items-center w-full">
        {/* Logo on the Left Side */}
        <div>
          <Image
            src="/assets/logo/black.png"
            alt="Logo"
            width={180}
            height={50}
          />
        </div>

        {/* Mobile Dropdown on the Right Side */}
        <div className="ml-auto">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-gray-200 transition">
              <Menu size={28} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-white shadow-lg rounded-lg">
              {navigationOptions.map((nav) => (
                <DropdownMenuItem key={nav.title}>
                  <Link
                    href={nav.href}
                    className="block w-full px-4 py-2 hover:bg-gray-100 rounded-md font-bold"
                  >
                    {nav.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Social Links (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="https://t.me/saffarul" target="_blank">
          <Image
            src="/assets/icons/telegram.png"
            alt="Telegram"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://wa.me/01953735955" target="_blank">
          <Image
            src="/assets/icons/whatsapp.png"
            alt="WhatsApp"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://www.behance.net/msaffar" target="_blank">
          <Image
            src="/assets/icons/behance.png"
            alt="Behance"
            width={50}
            height={50}
          />
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="hidden md:flex items-center gap-2 text-lg font-medium">
        <Link href="/" className="text-black font-semibold">
          EN
        </Link>
        <span>|</span>
        <Link href="/" className="text-gray-500 font-semibold">
          BN
        </Link>
      </div>

      {/* Start Project Button */}
      <div className="hidden md:block">
        <Button
          text="Start a New Project 🚀"
          link="#contact"
          className="w-fit bg-white border-2 border-black text-black font-bold py-3 px-5 rounded-lg hover:border-2 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
        />
      </div>
    </header>
  );
}
