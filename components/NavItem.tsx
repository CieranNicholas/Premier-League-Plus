import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface NavItemProps {
  href: string;
  icon: IconType;
  label: string;
  size?: number;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon: Icon,
  size = 26,
  active,
  label,
}) => {
  console.log(label, active);
  return (
    <Link
      href={href}
      className={twMerge(
        "group overflow-hidden text-primary-colour text-md flex gap-x-4 items-center justify-start cursor-pointer font-medium w-full p-1",
        active && "text-white"
      )}
    >
      <Icon size={size} className='hover:scale-125 transition' />
      {/* <p className='text-white  w-0 truncate opacity-0 group-hover:opacity-100 group-hover:w-auto transition'>
        {label}
      </p> */}
    </Link>
  );
};

export default NavItem;
