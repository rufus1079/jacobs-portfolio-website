import * as React from "react"
import IntroBox from "../components/IntroBox"
import ContactMeBox from "../components/ContactMeBox"
import NavBar from "../components/NavBar"
import Showcase from "../components/Showcase"
import AboutMeBox from "../components/AboutMeBox"


const IndexPage = () => {
  const [pageState, setPageState] = React.useState('');

  return (
    <>
       <div className="">
        <NavBar setPageState={setPageState}/>
    {pageState === 'About'
    ? <AboutMeBox/>
    : pageState === 'Contact'
    ?  <ContactMeBox/>
    : pageState === 'Projects'
    ? <Showcase/>
    : 
    <IntroBox/>
    }
    </div>
     
  
    
    <footer className="absolute w-full -z-50" > 
    <div className="container mx-auto my-auto flex justify-center gap-2xl pt-10xl">
      <a className=" fill-cyan-400 py-xl hover:-translate-y-xxs" href="mailto:jacob.welsh@uncc.edu">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
    </a>
    <a className=" fill-cyan-400 py-xl hover:-translate-y-xxs" href="tel:+19196126730">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"/></svg>
    </a>
    <a className=" fill-cyan-400 py-xl hover:-translate-y-xxs" href="https://github.com/rufus1079">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
    </a>
     <a className="fill-cyan-400 py-xl hover:-translate-y-xxs" href="www.linkedin.com/in/jacob-welsh-667986224">
     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
     </a>
    </div>
      
  </footer>
  </>
    
    
  )
}

export default IndexPage

export const Head = () => (
  <>
  <title>Home Page</title>
  <link href="https://api.fontshare.com/v2/css?f[]=montserrat@100,400,500,600,700&display=swap" rel="stylesheet"/>
  </>
     
)
