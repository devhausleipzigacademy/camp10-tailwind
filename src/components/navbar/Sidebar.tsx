import NavItem from "./NavItem";

type NavItems = {
  name: string;
  link: string;
  isActive: boolean;
};
type Props = {
  items: NavItems[];
};

function Sidebar({ items }: Props) {
  console.log(items);
  return (
    <aside className="fixed top-[62px] right-0 w-[250px] h-screen bg-slate-600 md:hidden">
      <ul className="flex flex-col gap-7">
        {items.map((item) => {
          return (
            <NavItem
              name={item.name}
              link={item.link}
              isActive={item.isActive}
              className="text-center"
            />
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
