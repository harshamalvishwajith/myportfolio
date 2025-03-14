"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import { usePathname } from "next/navigation";
import { MdContactPhone } from "react-icons/md";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Projects", href: "/work", current: false },
  { name: "About", href: "/about", current: false },
  { name: "My Blogs", href: "/blog", current: false },
  // { name: "Contact Me", href: "/contact", current: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const pathname = usePathname();
  const currentPath = pathname.split("/")[1];

  navigation.forEach((item) => {
    item.current = item.href === `/${currentPath}`;
  });

  return (
    <nav className="bg-[#0a0a0a] fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                alt="Your Company"
                src={`${basePath}/logo.svg`}
                width={200}
                height={100}
                className="h-12 w-auto invert"
              />
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      item.current
                        ? "text-blue-300"
                        : "text-gray-300 hover:text-blue-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Socials and Social Dropdown */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden md:block">
              <Socials />
            </div>

            {/* social dropdown */}
            <div className="relative md:hidden">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-300 transition-all duration-300 text-xl"
              >
                <span className="sr-only">Open contact menu</span>
                <MdContactPhone />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-black shadow-lg ring-1 ring-black/5">
                  <Socials />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
