import React from "react";
import NavBar from "./NavBar";
function Layout({children} : React.PropsWithChildren<{}>) {
return (
    <div className="grid grid-cols-9 bg-gray-200">
        <NavBar className="col-span-2 h-screen"/>
        <div className="col-span-7">
        {children}
        </div>
    </div>
)
}

export default Layout