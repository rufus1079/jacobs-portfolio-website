import * as React from "react"
import ProjectContainer from "./ProjectContainer"
import projects from "../../models/projects"

const Showcase = () => {
    const [projectState, setProjectState] = React.useState(0)

    return (

        <div className="container mx-auto my-auto section">
            <h1 className="text-2xl text-[#070a13] dark:text-slate-100 text-center xs:text-3xl lg:text-4xl xl:text-5xl p-base"><strong>Latest Work</strong></h1>
            
            <div>
                {projectState === 1
                    ? <ProjectContainer project={projects[0]} />
                    : projectState === 2
                        ? <ProjectContainer project={projects[1]} />
                        : projectState === 3
                            ? <ProjectContainer project={projects[2]} />
                            : projectState === 4
                                ? <ProjectContainer project={projects[3]} />
                                : <p className="max-w-[60ch] text-sm text-slate-600 text-center m-auto p-base xs:text-base xs:p-2xl lg:text-lg xl:text-xl xl:p-4xl">Commodo deserunt minim labore duis fugiat aliqua incididunt. Elit enim Lorem duis laborum laborum reprehenderit tempor eu commodo. Duis aliquip id cillum ex in. Dolore eiusmod duis exercitation elit cupidatat proident est. Incididunt mollit aliqua ad tempor in esse ad cillum do velit sint non nostrud. Veniam deserunt veniam anim fugiat eu anim.</p>

                }

            </div>
            <div>
                <ul className="flex flex-row justify-center items-center sm:gap-6xl lg:gap-7xl gap-3xl py-6xl">
                    <li>
                        <img
                            src={projects[0].logo}
                            alt="Beddit Logo"
                            className="rounded-full  h-6xl w-6xl sm:w-7xl sm:h-7xl lg:w-8xl lg:h-8xl image bg-gradient-to-r from-cyan-500 to-blue-500 "
                            onClick={() => setProjectState(1)}
                        ></img>
                    </li>
                    <li>
                        <img
                            src={projects[1].logo}
                            alt="Hope Love and Peace Logo"
                            className="rounded-full h-6xl w-6xl sm:w-7xl sm:h-7xl lg:w-8xl lg:h-8xl image bg-gradient-to-r from-cyan-500 to-blue-500"
                            onClick={() => setProjectState(2)}
                        ></img>
                    </li>
                    <li>
                        <img
                            src={projects[2].logo}
                            alt="Unwrapped Logo"
                            className="rounded-full h-6xl w-6xl sm:w-7xl sm:h-7xl lg:w-8xl lg:h-8xl image bg-gradient-to-r from-cyan-500 to-blue-500"
                            onClick={() => setProjectState(3)}
                        ></img>
                    </li>
                    <li>
                        <img
                            src={projects[3].logo}
                            alt="Blank Pages Logo w-8xl h-8xl" 
                            className="rounded-full h-6xl w-6xl sm:w-7xl sm:h-7xl lg:w-8xl lg:h-8xl image bg-gradient-to-r from-cyan-500 to-blue-500"
                            onClick={() => setProjectState(4)}
                        ></img>
                    </li>
                </ul>






            </div>
        </div>
    )
}


export default Showcase