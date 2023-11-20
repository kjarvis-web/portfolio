import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-zinc-900 text-zinc-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="text-2xl md:text-5xl text-zinc-100">
          Logo
        </Link>
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
    </nav>
  );
}

export default Navbar;
