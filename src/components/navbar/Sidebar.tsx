import NavItem from "./NavItem";
import clsx from "clsx";

type NavItems = {
  name: string;
  link: string;
  isActive: boolean;
};
type Props = {
  items: NavItems[];
  isOpen: boolean;
};

function Sidebar({ items, isOpen }: Props) {
  return (
    <aside
      className={clsx(
        "fixed top-[62px] right-0 w-[250px] h-screen bg-slate-600 md:hidden",
        isOpen ? "flex items-center justify-center" : "hidden"
      )}
    >
      <ul className="flex flex-col  gap-7 w-full">
        {items.map((item, idx) => {
          return (
            <NavItem
              name={item.name}
              link={item.link}
              isActive={item.isActive}
              className="text-center py-5 hover:bg-secondary"
              key={idx}
            />
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
