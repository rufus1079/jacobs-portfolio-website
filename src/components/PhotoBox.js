import * as React from "react"
import headshot from '../images/headshot.jpg'

const PhotoBox = () => {
    return (
            <img 
            src={headshot} 
            alt="Jacob"
            className="lazy max-w-[60ch] max-h-[60ch] image rounded-lg lg:mr-8xl"
            ></img>
    )
}

export default PhotoBox