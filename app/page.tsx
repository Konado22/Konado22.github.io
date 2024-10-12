//==============================================================================================
//Name:Jesse Draper
//BS Computer Science w/ Cybersecurity emphasis || DU Fullstack Bootcamp Graduate
// Thank you for viewing my portfolio
//
//===============================================================================================
'use client'
import Image from "next/image";
import { useState } from "react";
import Homepage from "./pages/homepage/page";
import AboutMe from "./pages/aboutme/page";
import Portfolio from "./pages/portfolio/page";
import ContactMe from "./pages/contactme/page";
import ServicesPage from "./pages/servicespage/page";

export default function Home() {
  "use client"
  const [currentPage, newPage] = useState('main');
  {
    if (currentPage == 'main') {
      return (
        <div className="grid grid-flow-col bg-blue-500 ">
          <div className="grid gap-y-10 bg-green-200">
            <div className="flex justify-center">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='300' height='220' className=" pt-5 rounded-full hover:shadow-2xl" />
            </div>
            <button className="hover:font-bold  hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
            <button className="hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
            <button className="hover:font-bold  hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('main')}>Services</button>
            <button className="hover:font-bold  hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <Homepage />
        </div>
      )
    } else if (currentPage == 'aboutme') {
      return (
        <div className="grid grid-flow-col bg-blue-500">
          <div className="grid gap-y-10 bg-green-200">
            <div className="flex justify-center">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='300' height='220' className=" pt-5 rounded-full hover:shadow-2xl" />
            </div>
            <button className="font-bold  hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
            <button className="hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
            <button className="hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage("main")}>Services</button>
            <button className="hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <AboutMe />
        </div>
      )
    } else if (currentPage == 'portfolio') {
      return (
        <div className="grid grid-flow-col bg-blue-500">
          <div className="grid gap-y-10 bg-green-200">
            <div className="flex justify-center">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='300' height='220' className=" pt-5 rounded-full hover:shadow-2xl" />
            </div>
            <button className="hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
            <button className="font-bold hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
            <button className="hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage("main")}>Services</button>
            <button className="hover:font-bold hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <Portfolio />
        </div>
      )
    } else if (currentPage == 'contactme') {
      return (
        <div className="grid grid-flow-col bg-blue-500">
          <div className="grid gap-y-10 bg-green-200">
            <div className="flex justify-center">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='300' height='220' className=" pt-5 rounded-full hover:shadow-2xl" />
            </div>
            <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
            <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
            <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage("main")}>Services</button>
            <button className="font-bold  hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <ContactMe />
        </div>
      )
    } else if (currentPage == 'servicesPage') {
      <div className="grid grid-flow-col bg-blue-500">
        <div className="grid gap-y-10 bg-green-200">
          <div className="flex justify-center">
            <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='300' height='220' className=" pt-5 rounded-full hover:shadow-2xl" />
          </div>
          <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
          <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
          <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage("main")}>Services</button>
          <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
        </div>
        <ServicesPage />
      </div>
    }
    else {
      return (
        <div className="flex justify-center">
          <h1 className="text-4xl text-red-700">404 ERROR PLEASE REFRESH THE BROWSER</h1>
        </div>
      )
    }
  }

}
//============================================================================================
//****************************************************************************************  */
//      BEFORE DEPLOYING TO GITHUB PAGES UNCOMMENT PATHING FOR DEPLOYEMENT URL IN CONFIG
//****************************************************************************************  */
//============================================================================================