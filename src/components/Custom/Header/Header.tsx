"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/logo/black.png";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Button from "@/components/ui/Button/Button";

const navigationOptions: { title: string; href: string }[] = [
  {
    title: "My Work",
    href: "/work",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Resume",
    href: "/resume",
  },
];

export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
      <Image src={logo} alt="Logo" width={150} height={40} />

      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {navigationOptions?.map((nav) => (
            <NavigationMenuItem key={nav?.title}>
              <Link href={nav?.href} passHref legacyBehavior>
                <NavigationMenuLink className="text-xl font-semibold">
                  {nav?.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Link href="https://t.me/yourhandle" target="_blank">
          <Image
            src="/assets/icons/telegram.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://wa.me/yourphonenumber" target="_blank">
          <Image
            src="/assets/icons/whatsapp.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://www.behance.net/yourhandle" target="_blank">
          <Image
            src="/assets/icons/behance.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 text-lg font-medium">
        <Link href="/en" className="text-black">
          EN
        </Link>
        <span>|</span>
        <Link href="/bn" className="text-gray-500">
          BN
        </Link>
      </div>
      <Button
        className="border-2 border-black text-black font-bold py-2 px-5 rounded-lg flex items-center gap-1 hover:bg-black hover:text-white transition-all duration-300"
        link="/start"
        text=" Start a new project 🚀"
      />
    </header>
  );
}
