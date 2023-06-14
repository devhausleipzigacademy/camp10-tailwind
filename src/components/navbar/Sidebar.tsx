type NavItems = {
  name: string;
  link: string;
};
type Props = {
  items: NavItems[];
};

function Sidebar({ items }: Props) {
  console.log(items);
  return (
    <aside>
      {items.map((item) => {
        return <a href={item.link}>{item.name}</a>;
      })}
    </aside>
  );
}

export default Sidebar;
