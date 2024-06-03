import * as React from "react"
import PhotoBox from "../components/PhotoBox"

const AboutMeBox = () => {
    return (
        <div className="container mx-auto my-auto section flex flex-col gap-base sm:gap-2xl lg:items-center lg:justify-between lg:flex-row">
            
            <div className="flex flex-col gap-base sm:gap-2xl xl:gap-[2rem]">
            <h2 className="text-2xl text-[#070a13] dark:text-slate-100 sm:text-3xl lg:text-4xl xl:text-5xl"><strong>About Me</strong></h2>
            <p className="max-w-[60ch] text-sm text-slate-600 sm:text-base lg:text-lg xl:text-xl">
            Hello, my name is Jacob Welsh. As a committed senior at UNCC, 
            I am pursuing a degree in Computer Science, with a focus on Software Engineering. 
            My academic journey has allowed me to delve into various facets of computer science, 
            including robotics, cybersecurity, systems, and networking. 
            However, it is full-stack web development that has truly captivated my interest. 
            My current skill set includes proficiency in React, Express, Node.js, Flask, 
            MongoDB, Mongoose, and PostgreSQL. I am continually looking to expand my expertise and explore new horizons in the field.
            </p>
            <hr className=" border-slate-800"></hr>
            <h3 className="text-sm text-slate-400 sm:text-base lg:text-lg xl:text-xl">Technologies</h3>
            <div className="flex">
            <ul className="flex flex-col gap-base pl-base flex-grow">
                <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600">ReactJs</li>
                <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600">NextJS</li>
                <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600">TailwindCSS</li>
            </ul> 
            <ul className="flex flex-col gap-base pl-base">
                <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600">JavaScript</li>
                <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600">CSS</li>
                <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600">HTML</li>
            </ul>
            </div>
           
            </div>
           
            <div>
                <PhotoBox/>
            </div>
            
        </div>
    )
}

export default AboutMeBox