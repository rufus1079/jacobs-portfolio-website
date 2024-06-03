import * as React from "react"

const ProjectContainer = ({ project }) => {
    
    const [hidden, setHidden] = React.useState("xl:absolute xl:left-10xl xl:top-8xl z-10 p-base ");
    const [popUp, setPopUp] = React.useState(false);

    return (

        <>
        {popUp === true
        ?<div className="modal" onClick={() => setPopUp(false)}>
            <div className="overlay"></div>
            <div className="modal-content text-xs md:text-base xs:text-sm lg:text-lg" >
            <p className=" text-gray-600"><strong>Features:</strong> {project.features}</p>
            <p className=" text-gray-600"><strong>Role:</strong> {project.role}</p>
            <p className=" text-gray-600"><strong>Technologies:</strong> {project.technologies}</p>
            <p className=" text-gray-600"><strong>Purpose:</strong> {project.purpose}</p>
            <p className=" text-gray-600"><strong>Spotlight:</strong> {project.spotlight}</p>
        </div>
        </div>
        :<></>}
        
        <div className="container mx-auto my-auto xl:relative">
          <div className="flex items-center justify-center flex-col">
            <div className={hidden}>
                <h2 className="text-cyan-400  xs:text-base lg:text-4xl font-semibold">{project.title}</h2>
                <p className="text-sm xs:text-base lg:text-lg project__summary"><strong>Summary:</strong> {project.summary}</p>
                <a className="text-cyan-400 underline" onClick={() => setPopUp(true)}>Learn More</a>
            </div>

            <div className="project__img-wrapper" onMouseEnter={() => setHidden("xl:absolute xl:left-10xl xl:top-8xl xl:project__slideLeft z-10 p-base")} onMouseLeave={() => setHidden("xl:absolute xl:left-10xl xl:top-8xl xl:project__slideRight z-10 p-base")}>
            <img 
            className="project__img rounded-md"
            src={project.images[0]} 
            alt=""
            
            />
            </div>

            
           
        </div>  
        </div>
        
        </>
        
    )
}

export default ProjectContainer