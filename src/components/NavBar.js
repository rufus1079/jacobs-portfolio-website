import * as React from "react"
import NavBarItem from "./NavBarItem"
import Name from "./Name"

const NavBar = ({setPageState}) => {
    return (
        <nav className="relative flex sm:justify-center space-x-4 bg-zinc-900 p-2">
            <Name setPageState={setPageState}>Jacob Welsh</Name>
            <NavBarItem setPageState={setPageState}>About</NavBarItem>
            <NavBarItem setPageState={setPageState}>Projects</NavBarItem>
            <NavBarItem setPageState={setPageState}>Contact</NavBarItem>
        </nav>
    )
}

export default NavBar
