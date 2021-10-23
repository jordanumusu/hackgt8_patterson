import React from "react";
import {Link} from "react-router-dom"

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

interface NavItemProps {
    name: string,
    icon: any,
    path: string
}
function NavItem({name,path,icon} : NavItemProps) {
    return(
        <div className="flex">
            {icon}
            <Link to={path}>
                {name}
            </Link>
        </div>
    )
}

export default NavItem;