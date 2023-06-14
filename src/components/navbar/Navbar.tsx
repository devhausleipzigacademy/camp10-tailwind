import NavItem from "./NavItem";

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
  ];
  return (
    <nav className="bg-slate-800 py-4 drop-shadow-sm">
      <ul className="flex justify-center gap-12">
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
  );
}

export default Navbar;
