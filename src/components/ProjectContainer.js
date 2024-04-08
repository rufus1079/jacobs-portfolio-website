import * as React from "react"

const ProjectContainer = ({ project }) => {
    

    return (
        <>
        <div className="container max-w-3xl mx-72 my-24 p-12 rounded-lg shadow-xl transition-shadow bg-slate-200">
        <h2 className="text-6xl font-bold text-gray-800 text-center">{project.title}</h2>
        </div>

        <img 
        className="p-5 rounded-lg shadow-xl transition-shadow bg-slate-200"
        src={project.images[0]} 
        alt=""
        />
        
        <div className="container max-w-2xl mx-80 my-12 p-12 rounded-lg shadow-xl transition-shadow bg-slate-200">
        <p className="text-2xl text-gray-600"><strong>Summary:</strong> {project.summary}</p>
        </div>

        <div className="container max-w-2xl mx-80 my-12 p-12 rounded-lg shadow-xl transition-shadow bg-slate-200">
        <p className="text-xl text-gray-600"><strong>Features:</strong> {project.features}</p>
        <p className="text-xl text-gray-600"><strong>Role:</strong> {project.role}</p>
        <p className="text-xl text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
        <p className="text-xl text-gray-600"><strong>Purpose:</strong> {project.purpose}</p>
        <p className="text-xl text-gray-600"><strong>Spotlight:</strong> {project.spotlight}</p>
        </div>
        </>
        
        
    )
}

export default ProjectContainer