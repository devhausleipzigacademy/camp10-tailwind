import NavItem from "./NavItem";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-slate-800 py-4 drop-shadow-sm flex justify-end">
        <HiMenu
          className="text-white text-3xl mr-7 block md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <ul className="w-full gap-12 hidden md:flex md:justify-center">
          {navItems.map((item, idx) => {
            return (
              <NavItem
                link={item.link}
                name={item.name}
                isActive={item.isActive}
                key={idx}
              />
            );
          })}
        </ul>
      </nav>
      <Sidebar items={navItems} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
