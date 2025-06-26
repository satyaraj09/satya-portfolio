"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-5 md:px-20 py-5">
        <Link href="/" className="font-bold text-2xl text-black">
          Satya Rajbhar
        </Link>

        <ul className="gap-10 font-semibold text-black hidden md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-[#00CAFF] transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
