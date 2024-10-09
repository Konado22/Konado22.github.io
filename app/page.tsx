//==============================================================================================
//Name:Jesse Draper
//BS Computer Science w/ Cybersecurity emphasis || DU Fullstack Bootcamp Graduate
// 
//
//===============================================================================================
'use client'
import React from "react";
import { useState } from "react";
export default function Home() {
  "use client"
  const [currentPage, newPage] = useState('main');
  {
    if (currentPage == 'main') {
      return (
        <>
          main page
          <button onClick={() => newPage('aboutme')}>About Me </button>
          <button onClick={() => newPage('traveler')}>Artifact 1</button>
          <button onClick={() => newPage('binarytree')}>Artifact 2</button>
        </>
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
          <button onClick={() => newPage('traveler')}>Artifact 1</button>
          <button onClick={() => newPage('binarytree')}>Artifact 2</button>
        </>
      )
    } else if (currentPage == 'traveler') {
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
          <button onClick={() => newPage('binarytree')}>Artifact 2</button>
        </>
      )
    } else if (currentPage == 'binarytree') {
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