import NavItem from "./NavItem";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <nav className="bg-slate-800">
      <ul>
        {navItems.map((item) => {
          return <NavItem link={item.link} name={item.name} />;
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
