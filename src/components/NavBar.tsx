import React from "react";
import NavItem from "../components/NavItem";
import { ViewGridIcon, ChatIcon, UsersIcon } from "@heroicons/react/outline";


interface NavBarProps {
  className: string;
}

function NavBar({ className }: NavBarProps) {
  return (
    <div className={`flex flex-col items-center w-full h-full ${className}`}>
      <h1 className="text-green-700 text-3xl">Patterson</h1>
      <div className="bg-white w-full h-full my-4 mx-4 ">
        <nav className="flex flex-col">
          <NavItem name="Dashboard" path="/" icon={<ViewGridIcon/>} />
          <NavItem name="Customer Chat" path="/" icon={ChatIcon} />
          <NavItem name="Manage Team" path="/" icon={UsersIcon} />
          <NavItem name="Calendar" path="/" icon={UsersIcon} />
          <NavItem name="Documents" path="/" icon={UsersIcon} />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
