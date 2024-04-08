import * as React from "react"

const ContactMeBox = () => {
    return (
        <div className="container mx-56 p-12">
           <div className="mx-56 my-56 p-12 rounded-lg shadow-xl transition-shadow bg-slate-200">
             <h2 className="text-4xl font-bold text-gray-800 text-center">Contact Information</h2>
                <ul>
                    <li className="text-3xl"><strong>Email: </strong> <a href="mailto:jacob.welsh@uncc.edu">jacob.welsh@uncc.edu</a></li>
                    <li className="text-3xl"><strong>Phone: </strong><a href="tel:+19196126730">+1 (919) 612-6730</a></li>
                    <li className="text-3xl"><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/jacob-welsh/" target="_blank" rel="noopener noreferrer">jacob-welsh</a></li>
                    <li className="text-3xl"><strong>GitHub: </strong><a href="https://github.com/jacobwelsh" target="_blank" rel="noopener noreferrer">jacobwelsh</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ContactMeBox