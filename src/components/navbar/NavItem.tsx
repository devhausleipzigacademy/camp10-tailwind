type Props = {
  name: string;
  link: string;
  isActive: boolean;
};

function NavItem({ link, name, isActive }: Props) {
  return (
    <li>
      <a
        className={`${
          isActive ? "text-teal-400" : "text-white"
        } text-lg font-semibold`}
        href={link}
      >
        {name}
      </a>
    </li>
  );
}

export default NavItem;
