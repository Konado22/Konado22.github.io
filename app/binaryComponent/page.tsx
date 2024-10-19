'use client'
import Link from "next/link";
import { useState } from "react"

export default function BinaryTree() {
    const [binaryCard, setBinary] = useState('short');
    if (binaryCard == 'short') {
        return (
            <div id='binaryCard' className=" text-black space-y-5 bg-slate-300 p-5 border-4 border-black rounded-lg">
                <h1 className="font-bold text-2xl">Binary Tree Sort</h1>
                <p>Comparison, justification, and implementation of a binary tree data structure. (C++)</p>
                <img className='focus:ring hover:shadow-lg' width='20' src="/arrow.png" onClick={() => setBinary('long')} />
            </div>
        )
    } else if (binaryCard == 'long') {
        return (
            <div id='binaryCard' className="text-black p-5 space-y-5 bg-slate-300 border-4 border-black rounded-lg">
                <h1 className="text-2xl font-bold">Binary Tree Sort</h1>
                <p>Comparison, justification, and implementation of<br />a binary tree data structure (C++)</p>
                <h2 className="font-bold">Description:</h2>
                <p>A binary tree data structure that stores parsed data from a csv file.</p>
                <h2 className="font-bold">Goals</h2>
                <p>In the original assignment a data structure was selected to best accomidate the requirements of this applicaton.
                    My goal in the enhancements was to implement the quickest and most effective to manage data structure.
                    Originally a vector was utilized for simplistic storgage and manipulation.  </p>
                    <div className="flex flex-col space-y-10">
                    <Link href='https://github.com/Konado22/Data-Structures-and-Sort' target="_blank"><button className="border-black border-2 p-5 bg-slate-200 rounded-lg hover:font-bold hover:shadow-inner">Original Artifact</button></Link>
                    <Link href='https://github.com/Konado22/Konado22.github.io/tree/main/EnhancedArtifacts/Binary-Tree-Sort' target='_blank'><button className="border-black border-2 p-5 bg-slate-200 rounded-lg hover:font-bold hover:shadow-inner">Enhanced Artifact</button></Link>
                </div>
                <img className=' rotate-180 focus:ring hover:shadow-lg' width='20' src="/arrow.png" onClick={() => setBinary('short')} />
            </div>
        )
    }
}