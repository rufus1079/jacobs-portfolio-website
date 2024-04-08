import * as React from "react"

const NavBarItem = ({ setPageState, children }) => {
    return (
        <button  
        className="rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900"
        onClick={() => setPageState(children)}
        >{children}</button>
    )
}

export default NavBarItem

