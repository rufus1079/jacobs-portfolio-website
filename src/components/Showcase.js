import * as React from "react"
import ProjectContainer from "./ProjectContainer"
import projects from "../../models/projects"

const Showcase = () => {
    const [hiddenP1, setHiddenP1] = React.useState("xl:absolute xl:top-8xl z-10 p-base ");
    const [hiddenP2, setHiddenP2] = React.useState("xl:absolute xl:right-[0rem] xl:top-8xl z-10 p-base xl:text-right ");
    const [hiddenP3, setHiddenP3] = React.useState("xl:absolute xl:top-8xl z-10 p-base ");
    const [hiddenP4, setHiddenP4] = React.useState("xl:absolute xl:top-8xl z-10 p-base xl:right-[0rem] xl:text-right");
    const [projectState, setProjectState] = React.useState(0);
    return (

        <>
            {projectState === 1
                ? <ProjectContainer project={projects[0]} setProjectState={setProjectState} />
                : projectState === 2
                    ? <ProjectContainer project={projects[1]} setProjectState={setProjectState} />
                    : projectState === 3
                        ? <ProjectContainer project={projects[2]} setProjectState={setProjectState} />
                        : projectState === 4
                            ? <ProjectContainer project={projects[3]} setProjectState={setProjectState} />
                            :<><h2 className="text-2xl text-[#070a13] dark:text-slate-100 sm:text-3xl lg:text-4xl xl:text-5xl text-center p-base lg:p-2xl">Check out some of my favorite projects that I’ve worked on!</h2>
                                <div className="container mx-auto my-auto showcase ">
                                <div className="xl:relative">
                                    <div className={hiddenP1}>
                                        <h2 className="text-cyan-400  xs:text-base lg:text-4xl font-semibold ">{projects[0].title}</h2>
                                        <button className="text-cyan-400 underline">Learn More</button>
                                    </div>

                                    <div className="project__img-wrapper" role="presentation" onClick={() => setProjectState(1)} onMouseEnter={() => setHiddenP1("xl:absolute xl:top-8xl xl:project__slideLeft_p1 z-10 p-base ")} onMouseLeave={() => setHiddenP1("xl:absolute xl:top-8xl xl:project__slideRight_p1 z-10 p-base")}>
                                        <img
                                            className="lazy rounded-md"

                                            src={projects[0].images[0]}
                                            alt=""

                                        />
                                    </div>



                                </div>
                                <div className=" xl:relative">
                                    <div className={hiddenP2}>
                                        <h2 className="text-cyan-400  xs:text-base lg:text-4xl font-semibold">{projects[1].title}</h2>
                                        <button className="text-cyan-400 underline">Learn More</button>
                                    </div>

                                    <div className="project__img-wrapper" role="presentation" onClick={() => setProjectState(2)} onMouseEnter={() => setHiddenP2("xl:absolute xl:top-8xl xl:project__slideRight_p2 z-10 p-base xl:right-[0rem] xl:text-right")} onMouseLeave={() => setHiddenP2("xl:absolute xl:top-8xl xl:project__slideLeft_p2 z-10 p-base xl:right-[0rem] xl:text-right")}>
                                        <img
                                            className="lazy rounded-md"
                                            src={projects[1].images[0]}
                                            alt=""

                                        />
                                    </div>



                                </div>
                                <div className="xl:relative">
                                    <div className={hiddenP3}>
                                        <h2 className="text-cyan-400  xs:text-base lg:text-4xl font-semibold">{projects[2].title}</h2>
                                        <button className="text-cyan-400 underline">Learn More</button>
                                    </div>

                                    <div className="project__img-wrapper" role="presentation" onClick={() => setProjectState(3)} onMouseEnter={() => setHiddenP3("xl:absolute xl:top-8xl xl:project__slideLeft_p3 z-10 p-base")} onMouseLeave={() => setHiddenP3("xl:absolute  xl:top-8xl xl:project__slideRight_p3 z-10 p-base")}>
                                        <img
                                            className="lazy  rounded-md"
                                            src={projects[2].images[0]}
                                            alt=""

                                        />
                                    </div>



                                </div>
                                <div className=" xl:relative">
                                    <div className={hiddenP4}>
                                        <h2 className="text-cyan-400  xs:text-base lg:text-4xl font-semibold">{projects[3].title}</h2>
                                        <button className="text-cyan-400 underline">Learn More</button>
                                    </div>

                                    <div className="project__img-wrapper" role="presentation" onClick={() => setProjectState(4)} onMouseEnter={() => setHiddenP4("xl:absolute  xl:top-8xl xl:project__slideRight_p4 z-10 p-base xl:right-[0rem] xl:text-right")} onMouseLeave={() => setHiddenP4("xl:absolute  xl:top-8xl xl:project__slideLeft_p4 z-10 p-base xl:right-[0rem] xl:text-right")}>
                                        <img
                                            className="lazy  rounded-md"
                                            src={projects[3].images[0]}
                                            alt=""

                                        />
                                    </div>



                                </div>
                            </div>
            </>}

        </>

    )
}


export default Showcase