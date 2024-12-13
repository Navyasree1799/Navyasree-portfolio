"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useThemeSwitcher from "./useThemeSwitcher";
import { MoonIcon, SunIcon } from "lucide-react";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const [mode, setMode]= useThemeSwitcher();
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname &&
            "text-pink-600 border-b-2 border-pink-600"
          } capitalize font-medium hover:text-pink-600 transition-all`}
        >
          {link.name}
        </Link>
      ))}
      
    </nav>
  );
};

export default Nav;
