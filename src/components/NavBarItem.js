import * as React from "react"

const NavBarItem = ({ setPageState, children }) => {
    return (
        <li>
        <button
        className="text-xs lg:text-sm font-semibold text-slate-600 tracking-tighter transition-colors hover:text-cyan-400"
        onClick={() => setPageState(children)}
        >{children}</button>
        </li>
        
    )
}

export default NavBarItem

