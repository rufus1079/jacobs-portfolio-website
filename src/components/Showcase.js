import * as React from "react"
import ProjectContainer from "./ProjectContainer"
import projects from "../../models/projects"

const Showcase = () => {
    const [projectState, setProjectState] = React.useState(0)

    return (
        <div className="container mx-56 p-12">
             <div className="container max-w-lg mx-96 my-24 p-12 rounded-lg shadow-xl transition-shadow bg-slate-200">
                <h1 className="text-4xl font-bold text-gray-800 text-center"><strong>Latest Work</strong></h1>
             </div>
            <div className="grid grid-rows-1 grid-cols-4 gap-4 ">
                <div className="container max-w-sm "
                ><img 
                src={projects[0].logo} 
                alt="Beddit Logo"
                className="p-5 rounded-lg shadow-xl transition-shadow bg-slate-200 h-48 w-48"
                onClick={() => setProjectState(1)}
                ></img></div>
                <div className="container max-w-sm"
                ><img 
                src={projects[1].logo} 
                alt="Hope Love and Peace Logo"
                className="p-5 rounded-lg shadow-xl transition-shadow bg-slate-200 h-48 w-48"
                onClick={() => setProjectState(2)}
                ></img> </div>
                <div className="container max-w-sm"
                ><img 
                src={projects[2].logo} 
                alt="Unwrapped Logo"
                className="p-5 rounded-lg shadow-xl transition-shadow bg-slate-200 h-48 w-48"
                onClick={() => setProjectState(3)}
                ></img></div>
                <div className="container max-w-sm"
                ><img 
                src={projects[3].logo} 
                alt="Blank Pages Logo"
                className="p-5 rounded-lg shadow-xl transition-shadow bg-slate-200 h-48 w-48"
                onClick={() => setProjectState(4)}
                ></img></div> 
            </div>
            <div>
                {projectState === 1
                ? <ProjectContainer project = {projects[0]}/>
                : projectState === 2
                ? <ProjectContainer project = {projects[1]}/>
                : projectState === 3
                ? <ProjectContainer project = {projects[2]}/>
                :  projectState === 4
                ? <ProjectContainer project = {projects[3]}/>
                : <></>
       
                }
               
                </div>
        </div>
    )
}


export default Showcase