"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import {
  MdOutlineDateRange,
  MdNotificationsNone,
  MdOndemandVideo,
} from "react-icons/md";
import { PiTrophy, PiTelevisionSimple } from "react-icons/pi";

import NavItem from "./NavItem";

const Nav = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: GoHomeFill,
        href: "/",
        active: pathname !== "/",
        label: "Home",
      },
      {
        icon: FaSearch,
        href: "/search",
        active: pathname !== "/search",
        label: "Search",
      },
      {
        icon: FaRegHeart,
        href: "/favourites",
        active: pathname !== "/favourites",
        label: "Favourites",
      },
      {
        icon: MdOutlineDateRange,
        href: "/calendar",
        active: pathname !== "/calendar",
        label: "Calendar",
      },
      {
        icon: MdOndemandVideo,
        href: "/watchlist",
        active: pathname !== "/watchlist",
        label: "Watchlist",
      },
      {
        icon: PiTelevisionSimple,
        href: "/shows",
        active: pathname !== "/shows",
        label: "Shows",
      },
      {
        icon: PiTrophy,
        href: "/awards",
        active: pathname !== "/awards",
        label: "Awards",
      },
      {
        icon: MdNotificationsNone,
        href: "/notifications",
        active: pathname !== "/notifications",
        label: "Notifications",
      },
    ],
    [pathname]
  );
  return (
    <div className='absolute group top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-y-5 py-10 pl-10 h-full justify-center'>
      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 h-full w-52 bg-gradient-to-r from-[#110210] transition opacity-0 group-hover:opacity-100 pointer-events-none'></div>
      {routes.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Nav;
