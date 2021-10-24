import React, { useEffect, useState } from "react";
import NavItem from "../components/NavItem";
import {
  ViewGridIcon,
  ChatIcon,
  UsersIcon,
  CogIcon,
  LogoutIcon,
  MenuIcon,
  ArrowLeftIcon
} from "@heroicons/react/outline";

import {UserCircleIcon} from "@heroicons/react/solid"

interface NavBarProps {
  className: string;
}

function NavBar({ className }: NavBarProps) {
  const [toggleLinks, setToggle] = useState(false);
  return (
    <div className={`flex flex-col items-center md:ml-4 ${className}`} style={{width:"250px"}}>
      <div className="md:mt-3 self-start md:self-auto">
        <img onClick={() => setToggle(true)} className="md:hidden absolute z-10 top-4 left-4 w-5 h-5" src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
        <h1 className="text-green-700 text-3xl hidden md:block no-sel">Patterson</h1>
      </div>
      <div className={"bg-white z-20 md:z-0 absolute md:relative flex-col items-start justify-center w-full h-full md:mt-4 mx-4 md:rounded-2xl shadow " + (toggleLinks ? "" : " hidden md:block")}>
        <div className="flex flex-row justify-end mt-5 mr-5 text-gray-400 md:hidden" onClick={() => setToggle(false)}>
          <ArrowLeftIcon className="h-5 w-5"/>
        </div>
        <nav className="flex flex-col w-full justify-center mt-6">
          <NavItem name="Dashboard" path="/dashboard" icon={<ViewGridIcon />} />
          <NavItem name="Customer Chat" path="/chat" icon={<ChatIcon />} />
          <NavItem name="Manage Team" path="/s" icon={<UsersIcon />} />
          <NavItem name="Calendar" path="/s" icon={UsersIcon} />
          <NavItem name="Documents" path="/s" icon={UsersIcon} />
        </nav>
      
        <div className="flex flex-col w-full justify-center ml-6 absolute bottom-0 mb-2">
         <div className="flex items-center text-gray-400">
           <CogIcon className="w-8 h-8 m-2"/>
           <button className="text-xl font-medium">Settings</button>
         </div>
         <div className="flex items-center text-gray-400">
         <LogoutIcon className="w-8 h-8 m-2"/>
         <button className="text-xl font-medium">Log out</button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
