import * as React from "react"
import PhotoBox from "../components/PhotoBox"
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { IconContext } from "react-icons";

const AboutMeBox = () => {
    return (
        <div className="container mx-auto my-auto section flex flex-col gap-base sm:gap-2xl lg:items-center lg:justify-between lg:flex-row">

            <div className="flex flex-col gap-base sm:gap-2xl xl:gap-[2rem]">
                <h2 className="text-2xl text-[#070a13] dark:text-slate-100 sm:text-3xl lg:text-4xl xl:text-5xl"><strong>About Me</strong></h2>
                <p className="max-w-[60ch] text-sm text-slate-600 sm:text-base lg:text-lg xl:text-xl">
                    I am a recent graduate from University of North Carolina at Charlotte looking for opportunities in primarily Fullstack Web development, but am eager and willing to take on any software development related task.
                    Throughout my college career, I was fortunate enough to have the opportunity to pursue many of my interests within the field of Computer Science, 
                    such as robotics, cybersecurity, systems, and networking. My true passion remains full-stack web development, but I bring a unique and well-developed knowledge base to the table.
                    In addition to a diverse knowledge set, my skill set includes proficiency in React, Express, Node.js, Flask, MongoDB, Mongoose, and PostgreSQL. 
                    I am continually looking to expand my expertise and explore new horizons in the field. Currently, I am pursuing learning more about UI/UX design so I can enhance the look and feel of my applications.
                    Thanks for taking the time to check out my portfolio, and feel free to reach out!
                </p>
                <hr className=" border-slate-800"></hr>
                <h3 className="text-sm text-[#070a13] dark:text-slate-100 sm:text-base lg:text-lg xl:text-xl">Technologies</h3>
                <IconContext.Provider value={{ size: "1.5em", className: "icon", style: { marginRight: '1em' } }}>
                    <div className="flex">
                        <ul className="flex flex-col gap-base pl-base flex-grow">
                            <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 flex"><FaReact />ReactJs</li>
                            <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 flex "><FaNodeJs />NodeJS</li>
                            <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 flex "> <RiTailwindCssFill />TailwindCSS</li>
                        </ul>
                        <ul className="flex flex-col gap-base pl-base">
                            <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 flex after:pr-9xl"><TbBrandJavascript />JavaScript</li>
                            <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 flex "><FaPython />Python</li>
                            <li className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 flex "><SiPostgresql />PostgreSQL</li>
                        </ul>
                    </div>
                </IconContext.Provider>
            </div>

            <div>
                <PhotoBox />
            </div>

        </div>
    )
}

export default AboutMeBox