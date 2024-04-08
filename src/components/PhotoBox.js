import * as React from "react"
import headshot from '../images/headshot.jpg'

const PhotoBox = () => {
    return (
        <div className="container max-w-sm mx-56 my-56">
            <img 
            src={headshot} 
            alt="Picture of Jacob"
            className="p-5 rounded-lg shadow-xl transition-shadow bg-slate-200"
            ></img>
        </div>
    )
}

export default PhotoBox