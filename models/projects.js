
import beddit from '../src/images/beddit.png'
import hopeloveandpeace from '../src/images/hopeloveandpeace.png'
import blankpages from '../src/images/blankpages.png'
import unwrapped from '../src/images/unwrapped.png'
import beddithp from '../src/images/beddithomepage.png'
import hopeloveandpeacehp from '../src/images/hopeloveandpeacehomepage.png'
import blankpageshp from '../src/images/blankpageshomepage.png'
import unwrappedhp from '../src/images/unwrappedhomepage.png'


const projects = [
    {
         id: 1,
         title: "Better Reddit",
         summary: "Reddit, also known as Better Reddit, represents my inaugural venture into full-stack application development. This project was undertaken as a collaborative effort within the context of my software engineering coursework. It boasts a PostgreSQL backend, incorporates user authentication through Bcrypt, and leverages Flask and SQLAlchemy for its implementation.",
         features: "Postgres SQL Database, User Authentication",
         role: "Lead Backend Developer",
         technologies: "Python Flask",
         purpose: "Final Project for Software Engineering Class",
         spotlight: "This was not only my first Fullstack Application, but was also the first team development project I had ever been on as well. Unfortuneately it proved to be a rough learning expierence as our group struggled the entire semester, with people dropping the class, members unable to complete their assigned parts, and struggling to find consistent times to meet with everyones busy schedul, ultimately we failed to deliver a working deliverable at the due date. What I have now on Github is the application with all the modifications I had to make after the fact to make it functional.",
         logo: beddit,
         images: [beddithp]
    },
    {
        id: 2,
        title: "Hope Love and Peace",
        summary: "Hope, Love, and Peace represents my initial foray into website creation. Developed utilizing standard web technologies such as HTML, CSS, and JavaScript, this website was specifically crafted to support the online presence of my mother's church ministry.",
        features: "Image Slideshow, Multiple Pages, Javascript",
        role: "Owner and Creator",
        technologies: "HTML CSS",
        purpose: "Church Ministry Website",
        spotlight: "My first ever website that is now used as the official website for my mother's church ministry",
        logo: hopeloveandpeace,
        images: [hopeloveandpeacehp]
   },
   {
        id: 3,
        title: "Spotify Unwrapped",
        summary: "Spotify Unwrapped served as the culminating group project for my undergraduate Capstone course. This project was conceived with the intention of enhancing the utility and accessibility of Spotify's listening analytics. It offers a platform where users can not only delve into their own musical preferences but also explore those of their friends, thereby discovering genres and artists that may have previously eluded them. The application is built on a robust architecture, featuring a React-based frontend and an Express backend. It integrates seamlessly with the Spotify API for data retrieval and authentication, supports user authentication mechanisms, and utilizes a MongoDB database with Mongoose for efficient data handling.",
        features: "Api calls to Spotify Api, React and Express",
        role: "Backend and Frontend Developer",
        technologies: "React, Express",
        purpose: "Capstone Project",
        spotlight: "This project is curently still under development and will be completed by the end of the semester. It is the second group project I have been a part of.",
        logo: unwrapped,
        images: [unwrappedhp]
},
{
    id: 4,
    title: "Blank Pages",
    summary: "Blank Pages is an e-commerce platform developed as my capstone project for the Network-Based Application Development course. This full-stack application leverages Express, MongoDB, and Mongoose to deliver a comprehensive online shopping experience. It is presently in the development phase, with completion slated for the end of the current semester.",
    features: "Mongoose, Express using MVC",
    role: "Owner and Creator",
    technologies: "Express, AtlasDb",
    purpose: "Final Project for my Netowork Based App Development class",
    spotlight: "Solo full stack Application",
    logo: blankpages,
    images: [blankpageshp]
},

]

export default projects


/* 
Introduction
• High-level summary of what the project is
• List of core functionalities / interesting features
• Your role in the project. were you exclusively doing development, or did you do
design? If you worked in groups, what parts did you tackle?
• Technologies used
• Links to live demo + source code (if applicable)
Purpose and Goal
• Why did you build this project? Why is it important to you?
• What was the expected outcome of the project?
• What were the initial designs?
• Any other preliminary planning that you did which helps build a narrative
Spotlight
50
• What is the “killer feature” of your project? What feature does it have that took the
most work, or was the most technically impressive? Some possible examples:
◦ User authentication
◦ A feed of items fetched from a database
◦ A particularly tricky UI element (eg. autocomplete, calendar, drag-and-drop)
◦ Anything you’re proud of!
• What were the technical hurdles that got in your way? Any major problems you hit
during development?
• How did you solve those problems? What was the solution? Go deep here, and write
with a developer in mind.
Current status
• This section is optional. If the project is actively being used by real people, talk a little
bit about the current status, who uses it, why they use it, what they say to you about
it, stuff like that.
• If the project was contrived specifically for the portfolio, omit this section.
Lessons Learned
• What did you learn doing this project? Feel free to list multiple things. Also feel free to
cover non-technical lessons. It’s great to talk about how you learned to use an
advanced feature of a framework or library, but it’s just as valuable to talk about
project-management experience, or things you learned about shipping projects.
• If you used a framework or other libraries/tools, was it a good choice? How did it
help? In which ways was it insufficient?
• Is your project accessible? What did you learn about accessibility, while building this
project? Describing how you tested your project using keyboard navigation or a screenreader
can make for a really compelling story!
• How has this affected the work you’ve done since then? Real examples of how this
project built your knowledge for future projects is fantastic.
*/