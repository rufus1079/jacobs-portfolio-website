import * as React from "react"
import ContactCard from "./ContactCard"

const ContactMeBox = () => {
    return (
        <div className="container mx-auto my-auto  ">
            <h1 className="text-2xl text-[#070a13] dark:text-slate-100 text-center xs:text-3xl lg:text-4xl xl:text-5xl p-base"><strong>Contact Information</strong></h1>
            <p className="max-w-[60ch] text-sm text-slate-600 text-center m-auto p-base xs:text-base xs:p-2xl lg:text-lg xl:text-xl xl:p-4xl">Whether you are starting a project, have a business opportunity, or just want to connect and chat, feel free to reach out.</p>
            <ContactCard/>
        </div>
    )
}

export default ContactMeBox