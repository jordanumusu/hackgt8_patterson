import React from "react";
import { NavLink } from "react-router-dom";

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

interface NavItemProps {
  name: string;
  icon: any;
  path: string;
}
function NavItem({ name, path, icon }: NavItemProps) {
  return (
    <div className="group flex items-center my-4 ml-6">
      <div className="w-8 h-8 mx-3 text-gray-400 group-hover:text-green-500 peer-active:text-green-500">{icon}</div>
      <NavLink className="text-xl text-gray-400 font-medium group-hover:text-green-500" activeClassName='peer text-green-500' to={path}>{name}</NavLink>
    </div>
  );
}


export default NavItem;
