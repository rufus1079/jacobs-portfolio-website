import * as React from "react"
import IntroBox from "../components/IntroBox"
import ContactMeBox from "../components/ContactMeBox"
import NavBar from "../components/NavBar"
import PhotoBox from "../components/PhotoBox"
import Showcase from "../components/Showcase"
import AboutMeBox from "../components/AboutMeBox"


const IndexPage = () => {
  const [pageState, setPageState] = React.useState('')

  return (
    <div
    className="bg-diagonal-line min-h-screen min-w-screen bg-cover bg-fixed"
    >
    <NavBar setPageState={setPageState}/>
    {pageState === 'About'
    ? <AboutMeBox/>
    : pageState === 'Contact'
    ?  <ContactMeBox/>
    : pageState === 'Projects'
    ? <Showcase/>
    : <div className="container mx-auto flex">
    <IntroBox/>
    <PhotoBox/>
    </div>
    }
    </div>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
