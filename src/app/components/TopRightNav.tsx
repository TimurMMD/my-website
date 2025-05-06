"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function TopRightNav() {
  const pathname = usePathname();

  // If not on home, add Home link
  const navLinks = pathname !== "/" 
    ? [{ name: "Home", path: "/" }, ...pages.filter(p => p.path !== pathname)]
    : pages;

  return (
    <div className="absolute top-6 right-6 flex flex-col items-end space-y-2">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className="text-cyan-400 hover:text-white text-2xl transition duration-300 border border-cyan-400/30 hover:border-white px-6 py-2 rounded-2xl hover:shadow-lg hover:shadow-cyan-400/40"





        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
