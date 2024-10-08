//==============================================================================================
//Name:Jesse Draper
//BS Computer Science w/ Cybersecurity emphasis || DU Fullstack Bootcamp Graduate
// 
//
//===============================================================================================
"use client"
import React from "react";
import { useState } from "react";
export default function Home() {
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
          about me page
          <button onClick={() => newPage('main')}>Homepage</button>
          <button onClick={() => newPage('traveler')}>Artifact 1</button>
          <button onClick={() => newPage('binarytree')}>Artifact 2</button>
        </>
      )
    } else if (currentPage == 'traveler') {
      return (
        <>
          Artifiact 1: Traveler
          <button onClick={() => newPage('main')}>Homepage</button>
          <button onClick={() => newPage('aboutme')}>About Me </button>
          <button onClick={() => newPage('binarytree')}>Artifact 2</button>
        </>
      )
    } else if (currentPage == 'binarytree') {
      return (
        <>
          Artifact 2 Binary tree
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
