import * as React from "react"
import { FiLink } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";


const ProjectContainer = ({ project, setProjectState }) => {

    return (

        <div className="container mx-auto my-auto">
            <button className="flex items-center gap-xxs text-sm capitalize text-[#070a13] dark:text-slate-100 font-normal xs:text-base lg:text-lg xl:text-xl underline" onClick={() => setProjectState(0)}><IoIosArrowRoundBack />Go Back</button>
            <h2 className="flex items-center gap-xxs text-2xl text-[#070a13] dark:text-slate-100 sm:text-3xl lg:text-4xl xl:text-5xl py-base">{project.title} <a aria-label="Proejct Link" href=""><FiLink /></a></h2>
            <p className="text-sm xs:text-base lg:text-lg xl:text-xl text-slate-600 max-w-[60ch] lg:max-w-[80ch]">{project.summary}</p>
            <h3 className="text-base capitalize mb-xxs xs:text-lg lg:text-xl xl:text-2xl pt-base text-[#070a13] dark:text-slate-100">Spotlight</h3>
            <p className=" text-sm xs:text-base lg:text-lg xl:text-xl text-slate-600 max-w-[60ch] lg:max-w-[80ch]">{project.spotlight}</p>


            <div className="flex flex-wrap gap-base">
                <div className="flex-[1] min-w-[250px]">
                    <h3 className="text-base capitalize mb-xxs xs:text-lg lg:text-xl xl:text-2xl text-[#070a13] dark:text-slate-100 pt-base">Features</h3>
                    <ul className=" text-sm xs:text-base lg:text-lg xl:text-xl text-slate-600">
                        {project.features.map(element => {
                            return (
                                <li className="">{element}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex-[1] min-w-[250px]">
                    <h3 className="text-base capitalize mb-xxs xs:text-lg lg:text-xl xl:text-2xl text-[#070a13] dark:text-slate-100 sm:pt-base">Technologies</h3>
                    <ul className=" text-sm xs:text-base lg:text-lg xl:text-xl text-slate-600">
                        {project.technologies.map(element => {
                            return (
                                <li className="">{element}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex-[1] min-w-[250px]">
                    <h3 className="text-base capitalize mb-xxs xs:text-lg lg:text-xl xl:text-2xl text-[#070a13] dark:text-slate-100 lg:pt-base">Role</h3>
                    <ul className=" text-sm xs:text-base lg:text-lg xl:text-xl text-slate-600">
                        <li>{project.role}</li>
                    </ul>
                </div>
                <div className="flex-[1] min-w-[250px]">
                    <h3 className="text-base capitalize mb-xxs xs:text-lg lg:text-xl xl:text-2xl text-[#070a13] dark:text-slate-100 xl:pt-base">Purpose</h3>
                    <ul className=" text-sm xs:text-base lg:text-lg xl:text-xl text-slate-600">
                        <li>{project.purpose}</li>
                    </ul>
                </div>

            </div>



        </div>


    )
}

export default ProjectContainer