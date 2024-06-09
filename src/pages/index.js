import * as React from "react"
import IntroBox from "../components/IntroBox"
import ContactMeBox from "../components/ContactMeBox"
import NavBar from "../components/NavBar"
import Showcase from "../components/Showcase"
import AboutMeBox from "../components/AboutMeBox"
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IconContext } from "react-icons";

const IndexPage = () => {
  const [pageState, setPageState] = React.useState('');

  return (
    <>
      <div className="">
        <NavBar setPageState={setPageState} />
        {pageState === 'About'
          ? <AboutMeBox />
          : pageState === 'Contact'
            ? <ContactMeBox />
            : pageState === 'Projects'
              ? <Showcase />
              :
              <IntroBox />
        }
      </div>



      <footer className="absolute w-full -z-50 text-slate-600" >
        <IconContext.Provider value={{ size:"2em", className: "icon" }}>
          <div className="container mx-auto my-auto flex justify-center gap-2xl pt-10xl">
            <a aria-label="Email" href="mailto:jacob.welsh@uncc.edu"><CiMail /></a>
            <a aria-label="Phone Number"  href="tel:+19196126730"><MdOutlinePhoneIphone /> </a>
            <a aria-label="Github" href="https://github.com/rufus1079"><FaGithub /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/jacob-welsh-667986224"> <CiLinkedin /></a>
          </div>
        </IconContext.Provider>;



      </footer>
    </>


  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Home Page</title>
    <link href="https://api.fontshare.com/v2/css?f[]=montserrat@100,400,500,600,700&display=swap" rel="stylesheet" />
  </>

)
