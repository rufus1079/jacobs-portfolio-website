import * as React from "react"

const ContactMeBox = () => {
    return (
        <div className="container mx-auto my-auto text-center ">
            <h1 className="text-2xl text-[#070a13] dark:text-slate-100 text-center xs:text-3xl lg:text-4xl xl:text-5xl p-base"><strong>Contact Information</strong></h1>
            <p className="max-w-[60ch] text-sm text-slate-600 text-center m-auto p-base xs:text-base xs:p-2xl lg:text-lg xl:text-xl xl:p-4xl">Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible. </p>
           <div >
                <ul>
                    <li className="text-sm text-slate-600 text-center m-auto p-base xs:text-base xs:p-2xl lg:text-lg xl:text-xl xl:p-4xl"><strong>Email: </strong> <a href="mailto:jacob.awelsh@outlook.com">jacob.awelsh@outlook.com</a></li>
                    <li className="text-sm text-slate-600 text-center m-auto p-base xs:text-base xs:p-2xl lg:text-lg xl:text-xl xl:p-4xl"><strong>Phone: </strong><a href="tel:+19196126730">+1 (919) 612-6730</a></li>
                    <li className="text-sm text-slate-600 text-center m-auto p-base xs:text-base xs:p-2xl lg:text-lg xl:text-xl xl:p-4xl"><strong>LinkedIn: </strong><a href="www.linkedin.com/in/jacob-welsh-667986224" target="_blank" rel="noopener noreferrer">jacob-welsh</a></li>
                    <li className="text-sm text-slate-600 text-center m-auto p-base xs:text-base xs:p-2xl lg:text-lg xl:text-xl xl:p-4xl"><strong>GitHub: </strong><a href="https://github.com/rufus1079" target="_blank" rel="noopener noreferrer">jacobwelsh</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ContactMeBox