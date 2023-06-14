import clsx from "clsx";

type Props = {
  name: string;
  link: string;
  isActive: boolean;
};

function NavItem({ link, name, isActive }: Props) {
  return (
    <li>
      <a
        className={clsx(
          "text-lg font-semibold hover:text-teal-200",
          isActive ? "text-teal-400" : "text-white"
        )}
        href={link}
      >
        {name}
      </a>
    </li>
  );
}

export default NavItem;
