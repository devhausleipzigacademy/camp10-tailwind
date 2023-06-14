import clsx from "clsx";

type Props = {
  name: string;
  link: string;
  isActive: boolean;
  className?: string;
};

function NavItem({ link, name, isActive, className }: Props) {
  return (
    <li className={className}>
      <a
        className={clsx(
          "text-lg font-semibold",
          isActive ? "text-primary" : "text-white"
        )}
        href={link}
      >
        {name}
      </a>
    </li>
  );
}

export default NavItem;
