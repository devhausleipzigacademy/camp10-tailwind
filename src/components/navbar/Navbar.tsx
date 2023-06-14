import NavItem from "./NavItem";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
import React from "react";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      isActive: false,
    },
    {
      name: "Shop",
      link: "/shop",
      isActive: false,
    },
    {
      name: "Blog",
      link: "/blog",
      isActive: true,
    },
    {
      name: "About us",
      link: "/about-us",
      isActive: false,
    },
    {
      name: "Projects",
      link: "/projects",
      isActive: false,
    },
  ];
  return (
    <>
      <nav className="bg-slate-800 py-4 drop-shadow-sm flex justify-end">
        <HiMenu className="text-white text-3xl mr-7 block md:hidden" />
        <ul className="w-full gap-12 hidden md:flex md:justify-center">
          {navItems.map((item) => {
            return (
              <NavItem
                link={item.link}
                name={item.name}
                isActive={item.isActive}
              />
            );
          })}
        </ul>
      </nav>
      <Sidebar items={navItems} />
    </>
  );
}

export default Navbar;
