import React from "react";
import NavBar from "./NavBar";
function Layout({children} : React.PropsWithChildren<{}>) {
return (
    <div className="md:flex md:flex-row bg-test relative">
        <NavBar className="md:col-span-2 "/>
        <div className="md:col-span-10 absolute top-10 left-0 md:static ml-4 md:mt-16 flex-grow">
        {children}
        </div>
    </div>
)
}

export default Layout