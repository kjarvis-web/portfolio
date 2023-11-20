"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-zinc-900 text-zinc-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="text-2xl md:text-5xl text-zinc-100">
          Logo
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
              <XMarkIcon
                onClick={() => setNavbarOpen(false)}
                className="h-5 w-5"
              />
            </button>
          ) : (
            <button className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
              <Bars3Icon
                onClick={() => setNavbarOpen(true)}
                className="h-5 w-5"
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((x) => (
              <li key={x.title}>
                <NavLink href={x.path} title={x.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
