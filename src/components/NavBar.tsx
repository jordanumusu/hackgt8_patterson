import React from "react";
import NavItem from "../components/NavItem";
import {
  ViewGridIcon,
  ChatIcon,
  UsersIcon,
  CogIcon,
  LogoutIcon
} from "@heroicons/react/outline";

import {UserCircleIcon} from "@heroicons/react/solid"

interface NavBarProps {
  className: string;
}

function NavBar({ className }: NavBarProps) {
  return (
    <div className={`flex flex-col items-center ml-4 ${className}`}>
      <h1 className="text-green-700 text-3xl">Patterson</h1>
      <div className="bg-white flex-col items-start justify-center w-full h-full mt-6 mx-4 rounded-2xl shadow relative">
        <nav className="flex flex-col w-full justify-center mt-6">
          <NavItem name="Dashboard" path="/" icon={<ViewGridIcon />} />
          <NavItem name="Customer Chat" path="/a" icon={<ChatIcon />} />
          <NavItem name="Manage Team" path="/s" icon={<UsersIcon />} />
          <NavItem name="Calendar" path="/s" icon={UsersIcon} />
          <NavItem name="Documents" path="/s" icon={UsersIcon} />
        </nav>
      
        <div className="flex flex-col w-full justify-center ml-6 absolute bottom-0 mb-2">
         <div className="flex items-center text-gray-400">
           <CogIcon className="w-8 h-8 m-2"/>
           <button className="text-xl font-semibold">Settings</button>
         </div>
         <div className="flex items-center text-gray-400">
         <LogoutIcon className="w-8 h-8 m-2"/>
         <button className="text-xl font-semibold">Log out</button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
