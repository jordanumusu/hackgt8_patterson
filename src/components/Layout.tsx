import React from "react";
import NavBar from "./NavBar";
function Layout({children} : React.PropsWithChildren<{}>) {
return (
    <div className="md:flex md:flex-row bg-gray-50 relative">
        <NavBar className="md:col-span-2 h-screen"/>
        <div className="md:col-span-10 absolute top-10 left-0 md:static ml-4 mt-2 md:mt-16 flex-grow">
        {children}
        </div>
    </div>
)
}

export default Layout