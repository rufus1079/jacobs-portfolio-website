import * as React from "react"
import headshot from '../images/headshot.jpg'

const PhotoBox = () => {
    return (
            <img 
            src={headshot} 
            alt="Jacob"
            className=" max-w-[60ch] max-h-[60ch] image rounded-lg"
            ></img>
    )
}

export default PhotoBox