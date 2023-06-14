type Props = {
  name: string;
  link: string;
};

function NavItem({ link, name }: Props) {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
}

export default NavItem;
