//==============================================================================================
//Name:Jesse Draper
//BS Computer Science w/ Cybersecurity emphasis || DU Fullstack Bootcamp Graduate
// Thank you for viewing my portfolio
//
//===============================================================================================
'use client'
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function Home() {
  "use client"
  const [currentPage, newPage] = useState('main');
  {
    if (currentPage == 'main') {
      return (
        <div className="grid grid-flow-col bg-blue-500">
          <div className="grid gap-y-10 bg-green-200">
            <div className="flex justify-center">
              <Image src='/profile.jpg' alt="profile picture" width='300' height='220' className=" pt-5 rounded-full" />
            </div>
            <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={()=>newPage('aboutme')}>About Me</button>
            <button className="hover:bg-green-600 rounded p-5 text-2xl" onClick={()=>newPage('portfolio')}>Portfolio</button>
            <button className="hover:bg-green-600 rounded p-5 text-2xl"onClick={()=>newPage('services')}>Services</button>
            <button className="hover:bg-green-600 rounded p-5 text-2xl"onClick={()=>newPage('contactme')}>Contact Me</button>

          </div>


          <div className="space-y-20 flex flex-col align-middle p-10">
            <h2 className="text-6xl">Hello, My name is</h2>
            <h1 className="text-8xl">Jesse Draper</h1>
            <p>I love to code and design websites.  </p>
          </div>
          <div>
            <Image src='/profile.jpg' alt="picture filler"height='200' width='200'/>
          </div>
        </div>
      )
    } else if (currentPage == 'aboutme') {
      return (
        <>
          <h1>about me page</h1>
          <div>
            <h2>Insert Professional Analysis</h2>
            <h2>Interests and pictures</h2>
            <p>contact information</p>
          </div>
          <button onClick={() => newPage('main')}>Homepage</button>
          <button onClick={() => newPage('portfolio')}>Portfolio</button>
          <button onClick={() => newPage('contactme')}>Contact Me</button>
        </>
      )
    } else if (currentPage == 'portfolio') {
      return (
        <>
          <h1>Artifact 1:Traveler</h1>
          <div>
            <h2>What was project</h2>
            <p>What was original project</p>
            <p>improvements made</p>
            <p>supporting images through narrative</p>
            <p>link to repository within portfolio</p>
          </div>
          <button onClick={() => newPage('main')}>Homepage</button>
          <button onClick={() => newPage('aboutme')}>About Me </button>
          <button onClick={() => newPage('contactme')}>Contact Me</button>
        </>
      )
    } else if (currentPage == 'contactme') {
      return (
        <>
          <h1>Artifact 2 Binary tree</h1>
          <div>
            <h2>What was project</h2>
            <p>What was original project</p>
            <p>improvements made</p>
            <p>supporting images through narrative</p>
            <p>link to repository within portfolio</p>
          </div>
          <button onClick={() => newPage('main')}>Homepage</button>
          <button onClick={() => newPage('aboutme')}>About Me </button>
          <button onClick={() => newPage('traveler')}>Artifact 1</button>
          <>
            add elements for github, email, etc
          </>
        </>
      )
    }
  }
}
//============================================================================================
//****************************************************************************************  */
//      BEFORE DEPLOYING TO GITHUB PAGES UNCOMMENT PATHING FOR DEPLOYEMENT URL IN CONFIG
//****************************************************************************************  */
//============================================================================================