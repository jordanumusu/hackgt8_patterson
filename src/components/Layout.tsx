import React from "react";
import NavBar from "./NavBar";
function Layout({children} : React.PropsWithChildren<{}>) {
return (
    <div className="grid grid-cols-12 bg-gray-50 gap-4">
        <NavBar className="col-span-2 h-screen"/>
        <div className="col-span-10">
        {children}
        </div>
    </div>
)
}

export default Layout