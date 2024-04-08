import * as React from "react"


const Name = ({ setPageState, children }) => {
    return(
        <button
        className="absolute left-0 m-2 animate-on-load-title text-2xl text-slate-200"
        onClick={() => setPageState('Home')}
        >{children}</button>
    )
}

export default Name