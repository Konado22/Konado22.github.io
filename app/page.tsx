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

export default function Home() {
  "use client"
  const [currentPage, newPage] = useState('main');
  {
    if (currentPage == 'main') {
      return (
        <div className="grid size-full grid-flow-row bg-blue-500">
          <div className="  max-h-full gap-y-10 ">
            <div className="flex justify-end pr-10 align-middle">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='60' height='60' className=" mt-10 mr-5 pt-5 hover:shadow-2xl" />
            </div>
            <button className="hover:font-bold hover:border-b-4 border-black rounded p-5 text-2xl " onClick={() => newPage('aboutme')}>About Me</button>
            <button className="hover:font-bold hover:border-b-4 border-black rounded p-5 text-2xl " onClick={() => newPage('portfolio')}>Portfolio</button>
            <button className="hover:font-bold  hover:border-b-4 border-black rounded p-5 text-2xl " onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <Homepage />
        </div>
      )
    } else if (currentPage == 'aboutme') {
      return (
        <div className="grid size-full grid-flow-row bg-blue-500">
          <div className="max-h-full gap-y-10 bg-gradient-to-b from-slate-500 to-blue-500">
            <div className="flex justify-end pr-10 align-middle">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='60' height='60' className=" mt-10 mr-5 pt-5 hover:shadow-2xl" />
            </div>
            <button className="font-bold border-b-4 border-black rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
            <button className="hover:font-bold rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
            <button className="hover:font-bold rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <AboutMe />
        </div>
      )
    } else if (currentPage == 'portfolio') {
      return (
        <div className="grid size-full grid-flow-row bg-blue-500 font-black">
          <div className="max-h-full gap-y-10 bg-gradient-to-b from-slate-600 to-blue-500">
            <div className="flex justify-end pr-10 align-middle">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='60' height='60' className=" mt-10 mr-5 pt-5 hover:shadow-2xl" />
            </div>
            <button className="hover:font-bold rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
            <button className="font-bold border-b-4 border-black rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
            <button className="hover:font-bold rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <Portfolio />
        </div>
      )
    } else if (currentPage == 'contactme') {
      return (
        <div className="grid size-full grid-flow-row bg-blue-500">
          <div className="max-h-full gap-y-10 bg-gradient-to-b from-slate-600 to-blue-500">
            <div className="flex justify-end pr-10 align-middle">
              <Image onClick={() => newPage('main')} src='/profile.jpg' alt="profile picture" width='60' height='60' className=" mt-10 mr-5 pt-5 hover:shadow-2xl" />
            </div>
            <button className="hover:font-bold rounded p-5 text-2xl" onClick={() => newPage('aboutme')}>About Me</button>
            <button className="hover:font-bold rounded p-5 text-2xl" onClick={() => newPage('portfolio')}>Portfolio</button>
            {/* <button className="hover:font-bold rounded p-5 text-2xl" onClick={() => newPage("main")}>Services</button> */}
            <button className="font-bold border-b-4 border-black rounded p-5 text-2xl" onClick={() => newPage('contactme')}>Contact Me</button>
          </div>
          <ContactMe />
        </div>
      )
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